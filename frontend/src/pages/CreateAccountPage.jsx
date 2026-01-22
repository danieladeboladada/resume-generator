import { useUserStore } from '@/store/userStore';
import { Box, Button, Center, Container, Heading, HStack, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreateAccountPage = () => {
  const [login, setLogin] = useState({user_name: '', pass_word: ''});
  const navigate = useNavigate();
  const { setLoggedInUser, setLoggedInUserId } = useUserStore();

  const createLogin = async () => {
    try {
      const res = await fetch("/api/createlogin", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(login)
      })
      const response = await res.json()
      if(response.success){
        alert("Account created and logged in successfully!");
        setLoggedInUserId(response.data._id);
        setLoggedInUser(login);
        navigate('/dashboard');
      } else {
        alert("Account creation failed:", response.message)

      }
    }
    catch (error) {
      console.log("Error during login fetch:", error.message)
    }
  }

  const backtoLogin = () => {
    navigate('/login');
  }
  
  return (
     <Container minH="80vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4} textAlign="center">
          <Heading size={"6xl"}>Create a Resume Generator Account</Heading>
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
              <Button size={"lg"} onClick={createLogin}>Sign Up and Log Me In</Button>
              <Button size={"lg"} onClick={backtoLogin}>Back to Log In</Button>
            </HStack>
          </Box>
            
        </VStack>
      </Container>
  )
}

export default CreateAccountPage