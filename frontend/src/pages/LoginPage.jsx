import { useUserStore } from '@/store/userStore';
import { Box, Button, Center, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [login, setLogin] = useState({user_name: '', pass_word: ''});
  const navigate = useNavigate();
  const { setLoggedInUser, getLoggedInUser } = useUserStore();

  const authLogin = async () => {
    if(!login.user_name || !login.pass_word){
      console.log({success: false, message: "Please fill in all fields"})
    }
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
        const user = getLoggedInUser();
        console.log("Logged in user:", user);
        navigate('/dashboard');
      } else {
        console.log("Login failed:", data.message)
      }
    }
    catch (error) {
      console.log("Error during login fetch:", error.message)
    }
  }

  return (
    <Container>
        <VStack spacing={4}>
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
              <Center>
                <Button size={"lg"} onClick={authLogin}>Log Me In</Button>
              </Center>
              
            </Box>
            
        </VStack>
    </Container>
  )
}

export default LoginPage