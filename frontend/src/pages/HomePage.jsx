import { Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <Container>
        <VStack spacing={4}>
            <Heading size={"6xl"}>Welcome to the Resume Generator!</Heading>
        </VStack>
    </Container>
  )
}

export default HomePage