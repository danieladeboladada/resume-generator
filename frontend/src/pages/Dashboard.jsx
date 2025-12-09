import Navbar from '@/app-components/Navbar'
import { Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { useUserStore } from '@/store/userStore';

const Dashboard = () => {
  const { getLoggedInUser } = useUserStore();
  const welcomeMessage = getLoggedInUser() ? `Welcome, ${getLoggedInUser().user_name}!` : "Welcome to your Dashboard!";

  return (
    <Container>
        <Navbar />
        <VStack spacing={4}>
            <Heading size={"6xl"}>{welcomeMessage}</Heading>
        </VStack>
    </Container>
  )
}

export default Dashboard