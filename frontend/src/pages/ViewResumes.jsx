import Navbar from '@/app-components/Navbar'
import { Checkbox, Container, Heading, Table, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useUserStore } from '@/store/userStore'

const ViewResumes = () => {
    const user_id = useUserStore((state) => state.user_id);
    const [userResumes, setUserResumes] = useState([]);
    const [selection, setSelection] = useState([]);

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
              }))
            );
          }
        } catch (err) {
          setUserResumes([]);
        }
      };
      fetchResumes();
    }, [user_id]);

    const indeterminate = selection.length > 0 && selection.length < userResumes.length;

    const rows = userResumes.map((item) => (
      <Table.Row
        key={item.id}
        data-selected={selection.includes(item.id) ? "" : undefined}
      >
        <Table.Cell>
          <Checkbox.Root
            size="sm"
            mt="0.5"
            aria-label="Select row"
            checked={selection.includes(item.id)}
            onCheckedChange={(checked) => {
              setSelection((prev) =>
                checked
                  ? [...prev, item.id]
                  : prev.filter((id) => id !== item.id),
              );
            }}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
          </Checkbox.Root>
        </Table.Cell>
        <Table.Cell>{item.resume_name}</Table.Cell>
        <Table.Cell>{item.date_created}</Table.Cell>
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
                    <Table.ColumnHeader w="6">
                        <Checkbox.Root
                        size="sm"
                        mt="0.5"
                        aria-label="Select all rows"
                        checked={indeterminate ? "indeterminate" : selection.length > 0}
                        onCheckedChange={(checked) => {
                            setSelection(
                              checked ? userResumes.map((item) => item.id) : [],
                            )
                        }}
                        >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        </Checkbox.Root>
                    </Table.ColumnHeader>
                    <Table.ColumnHeader>Resume Name</Table.ColumnHeader>
                    <Table.ColumnHeader>Date Created</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{rows}</Table.Body>
            </Table.Root>
        </VStack>
    </Container>
  )
}

export default ViewResumes