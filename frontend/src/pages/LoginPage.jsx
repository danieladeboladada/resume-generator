import { useUserStore } from '@/store/userStore';
import { Box, Button, Center, Container, Heading, HStack, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [login, setLogin] = useState({user_name: '', pass_word: ''});
  const navigate = useNavigate();
  const { setLoggedInUser } = useUserStore();

  const authLogin = async () => {
    try {
      const res = await fetch("/api/verifylogin", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(login)
      })
      const data = await res.json()
      if(data.success){
        setLoggedInUser(login);
        navigate('/dashboard');
      } else {
        console.log("Login failed:", data.message)
      }
    }
    catch (error) {
      console.log("Error during login fetch:", error.message)
    }
  }

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
  )
}

export default LoginPage