import Navbar from '@/app-components/Navbar'
import { Container, Heading } from '@chakra-ui/react'
import React from 'react'

const BuildResume = () => {
  return (
    <Container>
        <Navbar />
        <Heading size={"6xl"}>Build a Resume</Heading>
    </Container>
  )
}

export default BuildResume