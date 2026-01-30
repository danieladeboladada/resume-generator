import { useUserStore } from '@/store/userStore';
import { Button, Center, Container, Heading, HStack, Input, VStack, Box } from '@chakra-ui/react'
import { toaster } from '../components/ui/toaster';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [login, setLogin] = useState({user_name: '', pass_word: ''});
  const navigate = useNavigate();
  const { setLoggedInUser, setLoggedInUserId } = useUserStore();

  const authLogin = async () => {
    try {
      const res = await fetch("/api/verifylogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(login)
      });
      const response = await res.json();
      if (response.success) {
        toaster.create({
          title: 'Login Successful',
          description: 'You are being redirected to your dashboard...',
          type: 'success',
        });
        setLoggedInUserId(response.user_id);
        setLoggedInUser(login);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        toaster.create({
          title: 'Login Failed',
          description: response.message || 'Invalid username or password.',
          type: 'error',
        });
      }
    } catch (error) {
      toaster.create({
        title: 'Login Error',
        description: error.message || 'An error occurred during login.',
        type: 'error',
      });
    }
  };

  const gotoSignUp = () => {
    navigate('/createacct');
  }

  return (
    <Container minH="80vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={4} textAlign="center">
        <Heading size={"6xl"}>Log into Resume Generator</Heading>
        <Box maxW="sm">
          <Input
            placeholder="Username"
            value={login.user_name}
            onChange={(e) =>
              setLogin({ ...login, user_name: e.target.value })
            }
          />
          <Input
            placeholder="Password"
            type="password"
            value={login.pass_word}
            onChange={(e) =>
              setLogin({ ...login, pass_word: e.target.value })
            }
          />
          <HStack>
            <Button size={"lg"} onClick={authLogin}>Log Me In</Button>
            <Button size={"lg"} onClick={gotoSignUp}>Go to Sign Up</Button>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
}

export default LoginPage