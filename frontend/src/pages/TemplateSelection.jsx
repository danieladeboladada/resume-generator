import Navbar from '@/app-components/Navbar'
import ResumePDF from '@/app-components/ResumePDF'
import {
  Container,
  Heading,
  VStack,
  HStack,
  Box,
  Button,
  Card,
  SimpleGrid,
  Image,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PDFDownloadLink } from '@react-pdf/renderer'

const TemplateSelection = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const resumeData = location.state?.resumeData || {}
  const [selectedTemplate, setSelectedTemplate] = useState('template1')

  const templates = [
    { id: 'template1', name: 'Template 1', description: 'Resume Template 1' },
    { id: 'template2', name: 'Template 2', description: 'Resume Template 2' },
    { id: 'template3', name: 'Template 3', description: 'Resume Template 3' },
  ]

  return (
    <Container>
      <Navbar />
      <Box maxWidth="70%" mx="auto">
        <VStack spacing={8} align="stretch">
          <VStack spacing={2} align="center">
            <Box fontSize="sm" fontWeight="medium" color="blue.600">Step 2 of 2</Box>
            <Heading size="2xl" textAlign="center">
              Select a Template
            </Heading>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            {templates.map((template) => (
              <Card.Root
                key={template.id}
                maxW="sm"
                overflow="hidden"
                cursor="pointer"
                borderWidth={selectedTemplate === template.id ? '3px' : '1px'}
                borderColor={selectedTemplate === template.id ? 'blue.500' : 'gray.200'}
                onClick={() => setSelectedTemplate(template.id)}
                _hover={{ shadow: 'md' }}
              >
                <Image
                  src="https://plus.unsplash.com/premium_photo-1675553988173-a5249b5815fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                  alt={template.name}
                />
                <Card.Body gap="2">
                  <Card.Title>{template.name}</Card.Title>
                  <Card.Description>
                    {template.description}
                  </Card.Description>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>

          <HStack justify="space-between" pt={6}>
            <Button
              variant="outline"
              size="lg"
              fontSize="lg"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>

            <PDFDownloadLink
              document={<ResumePDF resumeData={resumeData} />}
              fileName="resume.pdf"
            >
              {({ blob, url, loading, error }) => (
                <Button colorScheme="blue" size="lg" fontSize="lg" isDisabled={loading}>
                  {loading ? 'Generating PDF...' : 'Save / Preview'}
                </Button>
              )}
            </PDFDownloadLink>
          </HStack>
        </VStack>
      </Box>
    </Container>
  )
}

export default TemplateSelection
