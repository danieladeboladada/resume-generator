import { Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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

        <Link to={"/"}>
          <Text textAlign={"center"}>
            Logout
          </Text>
        </Link>
      </Flex>
    </Container>
  )
}

export default Navbar