import { Button, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store/userStore';

const Navbar = () => {
  const navigate = useNavigate();
  const { setLoggedInUser, setLoggedInUserId } = useUserStore();

  const logOutUser = () => {
    setLoggedInUserId(null);
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
          <Text
            textAlign={"center"}
            fontWeight={"bold"}
            _hover={{ bg: "pink", color: "black" }}
          >
            Dashboard
          </Text>
        </Link>

        <Link to={"/viewresumes"}>
          <Text
            textAlign={"center"} 
            fontWeight={"bold"} 
            _hover={{ bg: "pink", color: "black" }}
          >
            View Resumes
          </Text>
        </Link>

        <Link to={"/buildresume"}>
          <Text
            textAlign={"center"} 
            fontWeight={"bold"} 
            _hover={{ bg: "pink", color: "black" }}
          >
            Build a Resume
          </Text>
        </Link>

        <Button onClick={logOutUser}>Logout</Button>
      </Flex>
    </Container>
  )
}

export default Navbar