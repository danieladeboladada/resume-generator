import { Button, Container, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Container minH="80vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing={4} textAlign="center">
            <Heading size={"6xl"}>Welcome to the Resume Generator!</Heading>
            <HStack>
              <Link to={"/login"}>
                <Button>Log In</Button>
              </Link>
              <Link to={"/createacct"}>
                <Button>Sign Up</Button>
              </Link>
            </HStack>
        </VStack>
    </Container>
  )
}

export default HomePage