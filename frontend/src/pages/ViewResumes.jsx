import Navbar from '@/app-components/Navbar'
import { Container, Heading, Table, VStack, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useUserStore } from '@/store/userStore'

const ViewResumes = () => {
    const user_id = useUserStore((state) => state.user_id);
    const [userResumes, setUserResumes] = useState([]);


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
      try {
        const response = await fetch(`/api/resume/delete/${resumeId}`, { method: 'DELETE' });
        const data = await response.json();
        if (data.success) {
          setUserResumes((prev) => prev.filter((r) => r.id !== resumeId));
        } else {
          // Optionally handle error
        }
      } catch (err) {
        // Optionally handle error
      }
    };

    const rows = userResumes.map((item) => (
      <Table.Row key={item.id}>
        <Table.Cell>{item.resume_name}</Table.Cell>
        <Table.Cell>{item.date_created}</Table.Cell>
        <Table.Cell style={{ display: 'flex', gap: '0.5rem' }}>
          <Button size="sm" colorScheme="blue" onClick={() => handleDownload(item.id)}>
            Download
          </Button>
          <Button size="sm" bg="#e57373" color="white" _hover={{ bg: '#c62828' }} onClick={() => handleDelete(item.id)}>
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    ));


  return (
    <Container>
        <Navbar />
        <VStack spacing={4}>
          <Heading size={"6xl"}>Your Resumes</Heading>
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
  )
}

export default ViewResumes