import Navbar from '@/app-components/Navbar'
import { Checkbox, Container, Heading, Table, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ViewResumes = () => {
    // Mock data
    const mockResumes = [
        { id: '1', name: 'Software Engineer Resume', dateCreated: '2025-12-05' },
        { id: '2', name: 'Product Manager CV', dateCreated: '2025-11-28' },
        { id: '3', name: 'Marketing Specialist Resume', dateCreated: '2025-11-15' },
        { id: '4', name: 'Data Analyst Resume', dateCreated: '2025-11-10' },
        { id: '5', name: 'UX Designer Portfolio', dateCreated: '2025-10-22' },
        { id: '6', name: 'Sales Director Resume', dateCreated: '2025-10-18' },
        { id: '7', name: 'Financial Analyst CV', dateCreated: '2025-10-05' },
        { id: '8', name: 'HR Manager Resume', dateCreated: '2025-09-30' },
    ];

    const [selection, setSelection] = useState([])

    const indeterminate = selection.length > 0 && selection.length < mockResumes.length

    const rows = mockResumes.map((item) => (
    <Table.Row
      key={item.name}
      data-selected={selection.includes(item.name) ? "" : undefined}
    >
      <Table.Cell>
        <Checkbox.Root
          size="sm"
          mt="0.5"
          aria-label="Select row"
          checked={selection.includes(item.name)}
          onCheckedChange={(checked) => {
            setSelection((prev) =>
              checked
                ? [...prev, item.name]
                : prev.filter((name) => name !== item.name),
            )
          }}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control />
        </Checkbox.Root>
      </Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.dateCreated}</Table.Cell>
    </Table.Row>
    ))


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
                            checked ? mockResumes.map((item) => item.name) : [],
                            )
                        }}
                        >
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        </Checkbox.Root>
                    </Table.ColumnHeader>
                    <Table.ColumnHeader>Name</Table.ColumnHeader>
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