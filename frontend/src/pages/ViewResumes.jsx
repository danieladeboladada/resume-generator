import Navbar from '@/app-components/Navbar'
import { Container, Heading } from '@chakra-ui/react'
import React from 'react'

const ViewResumes = () => {
  return (
    <Container>
        <Navbar />
        <Heading size={"6xl"}>Your Resumes</Heading>
    </Container>
  )
}

export default ViewResumes