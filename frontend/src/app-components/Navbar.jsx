import { Button, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store/userStore';

const Navbar = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useUserStore();

  const logOutUser = () => {
    setLoggedInUser(null);
    navigate('/');
  }
  
  return (
    <Container >
      <Flex 
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{base: "column", sm: "row"}}
      >
        <Link to={"/dashboard"}>
          <Text textAlign={"center"}>
            Dashboard
          </Text>
        </Link>

        <Button onClick={logOutUser}>Logout</Button>
      </Flex>
    </Container>
  )
}

export default Navbar