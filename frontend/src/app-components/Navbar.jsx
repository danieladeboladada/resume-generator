import { Button, Box, Text, Portal, CloseButton, Dialog, Avatar, HStack } from '@chakra-ui/react'
import { MdDashboard, MdCreate, MdRestoreFromTrash } from 'react-icons/md';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserStore } from '@/store/userStore';

const Navbar = () => {
  const navigate = useNavigate();
  const { setLoggedInUser, setLoggedInUserId, getLoggedInUser } = useUserStore();
  const loggedInUser = getLoggedInUser ? getLoggedInUser() : null;
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
    <Box
      as="nav"
      position="fixed"
      left={0}
      top={0}
      h="100vh"
      w={{ base: '60px', md: '220px' }}
      bg="gray.800"
      color="white"
      boxShadow="md"
      zIndex={100}
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={6}
      gap={4}
    >
      <Link to={"/dashboard"}>
        <Text
          textAlign={"center"}
          fontWeight={"bold"}
          display="flex"
          alignItems="left"
          gap={2}
          px={2}
          py={2}
          borderRadius="md"
          _hover={{ bg: "pink.200", color: "black" }}
        >
          <MdDashboard size={22} /> Dashboard
        </Text>
      </Link>


      <Link to={"/buildresume"}>
        <Text
          textAlign={"center"}
          fontWeight={"bold"}
          display="flex"
          alignItems="center"
          gap={2}
          px={2}
          py={2}
          borderRadius="md"
          _hover={{ bg: "pink.200", color: "black" }}
        >
          <MdCreate size={22} /> Build a Resume
        </Text>
      </Link>

      <Link to={"/recently-deleted"}>
        <Text
          textAlign={"center"}
          fontWeight={"bold"}
          display="flex"
          alignItems="center"
          gap={2}
          px={2}
          py={2}
          borderRadius="md"
          _hover={{ bg: "pink.200", color: "black" }}
        >
          <MdRestoreFromTrash size={22} /> Recently Deleted
        </Text>
      </Link>

      <Box mt="auto" mb={2} w="80%" px={2} display="flex" alignItems="center" flexDirection="column">
        <HStack mb={4} spacing={3} alignItems="center">
          <Avatar.Root size="sm" colorPalette={"teal"}>
            <Avatar.Fallback name={loggedInUser?.user_name || 'User'} />
          </Avatar.Root>
          <Text fontWeight="bold" fontSize="md" isTruncated maxW="120px">
            {loggedInUser?.user_name || 'User'}
          </Text>
        </HStack>
        <Dialog.Root isOpen={logoutDialogOpen} onClose={() => setLogoutDialogOpen(false)} placement="center">
          <Dialog.Trigger asChild>
            <Button w="100%" onClick={() => setLogoutDialogOpen(true)} colorScheme="red">Logout</Button>
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
                  <Button onClick={logOutUser} isLoading={loggingOut} colorScheme="red">
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
      </Box>
    </Box>
  )
}

export default Navbar