import Navbar from '@/app-components/Navbar'
import { Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

const BuildResume = () => {
  return (
    <Container>
        <Navbar />
        <VStack spacing={4}>
            <Heading size={"6xl"}>Build a Resume</Heading>
        </VStack>
    </Container>
  )
}

export default BuildResume