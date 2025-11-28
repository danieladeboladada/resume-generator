import { Box, Button, Center, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const LoginPage = () => {
  const [login, setLogin] = useState({user_name: '', pass_word: ''});

  const authLogin = async () => {
    if(!login.user_name || !login.pass_word){
      console.log({success: false, message: "Please fill in all fields"})
    }
    const res = await fetch("/api/login", {
      body: JSON.stringify(login)
    })
    const data = await res.json()
    console.log("data: "+data)
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