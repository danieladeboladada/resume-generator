import { Button, Container, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Container>
        <VStack spacing={4}>
            <Heading size={"6xl"}>Welcome to the Resume Generator!</Heading>
            <HStack>
              <Link to={"/login"}>
                <Button>Log In</Button>
              </Link>
              <Button>Sign Up</Button>
            </HStack>
        </VStack>
    </Container>
  )
}

export default HomePage