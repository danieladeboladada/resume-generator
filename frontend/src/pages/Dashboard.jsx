import Navbar from '@/app-components/Navbar'
import { Container, Heading, VStack, Table, Button, Portal, CloseButton, Dialog, Stack, Box, Float } from '@chakra-ui/react'
import { MdVisibility, MdDownload, MdDelete, MdAdd } from 'react-icons/md';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/userStore';

const Dashboard = () => {
  const { getLoggedInUser } = useUserStore();
  const navigate = useNavigate();
  const welcomeMessage = getLoggedInUser() ? `Welcome, ${getLoggedInUser().user_name}!` : "Welcome to your Dashboard!";
  const user_id = useUserStore((state) => state.user_id);
  const [userResumes, setUserResumes] = useState([]);
  const [dialogOpenId, setDialogOpenId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fetchResumes = async () => {
      if (!user_id) return;
      try {
        const response = await fetch(`/api/resume/getall/${user_id}`);
        const data = await response.json();
        if (data.success) {
          setUserResumes(
            data.resumes.map((resume) => ({
              id: resume._id,
              resume_name: resume.resume_name,
              date_created: resume.createdAt ? resume.createdAt.slice(0, 10) : '',
              resume_body: resume.resume_body,
            }))
          );
        }
      } catch (err) {
        setUserResumes([]);
      }
    };
    fetchResumes();
  }, [user_id]);

  const downloadBase64PDF = (base64String, fileName) => {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const handleDownload = (resumeId) => {
    const resume = userResumes.find((r) => r.id === resumeId);
    if (resume && resume.resume_body) {
      downloadBase64PDF(resume.resume_body, `${resume.resume_name || 'resume'}.pdf`);
    }
  };

  const handleDelete = async (resumeId) => {
    setDeleting(true);
    try {
      const response = await fetch(`/api/resume/delete/${resumeId}`, { method: 'DELETE' });
      const data = await response.json();
      if (data.success) {
        setUserResumes((prev) => prev.filter((r) => r.id !== resumeId));
      }
    } catch (err) {
      // Optionally handle error
    } finally {
      setDeleting(false);
      setDialogOpenId(null);
    }
  };

  const rows = userResumes.map((item) => (
    <Table.Row key={item.id}>
      <Table.Cell>{item.resume_name}</Table.Cell>
      <Table.Cell>{item.date_created}</Table.Cell>
      <Table.Cell style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" variant="outline" >
            <MdVisibility /> Preview
          </Button>
          <Button size="sm" onClick={() => handleDownload(item.id)} >
            <MdDownload />Download
          </Button>
          <Dialog.Root isOpen={dialogOpenId === item.id} onClose={() => setDialogOpenId(null)} placement="center">
            <Dialog.Trigger asChild>
              <Button size="sm" bg="#e57373" color="white" _hover={{ bg: '#c62828' }} onClick={() => setDialogOpenId(item.id)}>
                <MdDelete /> Delete
              </Button>
            </Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header></Dialog.Header>
                <Dialog.Body>
                  <p>Are you sure you want to delete this resume? This action cannot be undone.</p>
                </Dialog.Body>
                <Dialog.Footer>
                  <Dialog.ActionTrigger asChild>
                    <Button variant="outline" onClick={() => setDialogOpenId(null)} disabled={deleting}>Cancel</Button>
                  </Dialog.ActionTrigger>
                  <Button size="sm" bg="#e57373" color="white" _hover={{ bg: '#c62828' }}  onClick={() => handleDelete(item.id)} isLoading={deleting}>
                    Delete
                  </Button>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Container ml={{ base: 0, md: '220px' }} maxW="calc(100vw - 220px)">
      <Navbar />
      <VStack spacing={4} mt={8} alignItems="flex-start" width="100%" mx={6}>
        <Heading size={"6xl"}>{welcomeMessage}</Heading>
        <Stack gap="3" mt={4} align="flex-start" width="100%">
          <Heading size={"lg"}>Build a Resume</Heading>
          <Box position="relative" width="100px" height="150px" borderRadius="md" boxShadow="md" borderWidth={"thick"}>
            <Float placement="middle-center">
              <Button
                size="lg"
                aria-label="Add Resume"
                borderRadius={"full"}
                onClick={() => navigate('/buildresume')}
              >
                <MdAdd size={32} />
              </Button>
            </Float>
          </Box>
        </Stack>
        <Heading size={"lg"} mt={8}>Your Resumes</Heading>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Resume Name</Table.ColumnHeader>
              <Table.ColumnHeader>Date Created</Table.ColumnHeader>
              <Table.ColumnHeader>Action</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>{rows}</Table.Body>
        </Table.Root>
        {userResumes.length === 0 && (
          <Heading size="md" color="gray.500" mt={4}>
            No resumes found
          </Heading>
        )}
      </VStack>
    </Container>
  );
}

export default Dashboard