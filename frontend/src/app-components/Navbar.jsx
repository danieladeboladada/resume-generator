import { Button, Container, Flex, Text, Portal, CloseButton, Dialog } from '@chakra-ui/react'
import { MdDashboard, MdListAlt, MdCreate } from 'react-icons/md';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store/userStore';

const Navbar = () => {
  const navigate = useNavigate();
  const { setLoggedInUser, setLoggedInUserId } = useUserStore();


  const [logoutDialogOpen, setLogoutDialogOpen] = React.useState(false);
  const [loggingOut, setLoggingOut] = React.useState(false);

  const logOutUser = () => {
    setLoggingOut(true);
    setTimeout(() => {
      setLoggedInUserId(null);
      setLoggedInUser(null);
      setLoggingOut(false);
      setLogoutDialogOpen(false);
      navigate('/');
    }, 300); // Simulate async logout
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
            display="flex"
            alignItems="center"
            gap={2}
            _hover={{ bg: "pink", color: "black" }}
          >
            <MdDashboard size={20} /> Dashboard
          </Text>
        </Link>

        <Link to={"/viewresumes"}>
          <Text
            textAlign={"center"}
            fontWeight={"bold"}
            display="flex"
            alignItems="center"
            gap={2}
            _hover={{ bg: "pink", color: "black" }}
          >
            <MdListAlt size={20} /> View Resumes
          </Text>
        </Link>

        <Link to={"/buildresume"}>
          <Text
            textAlign={"center"}
            fontWeight={"bold"}
            display="flex"
            alignItems="center"
            gap={2}
            _hover={{ bg: "pink", color: "black" }}
          >
            <MdCreate size={20} /> Build a Resume
          </Text>
        </Link>

        <Dialog.Root isOpen={logoutDialogOpen} onClose={() => setLogoutDialogOpen(false)} placement="center">
          <Dialog.Trigger asChild>
            <Button onClick={() => setLogoutDialogOpen(true)}>Logout</Button>
          </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Log Out</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                  <p>Are you sure you want to log out?</p>
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.ActionTrigger asChild>
                    <Button variant="outline" onClick={() => setLogoutDialogOpen(false)} disabled={loggingOut}>Cancel</Button>
                  </Dialog.ActionTrigger>
                  <Button onClick={logOutUser} isLoading={loggingOut}>
                    Log Out
                  </Button>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </Flex>
    </Container>
  )
}

export default Navbar