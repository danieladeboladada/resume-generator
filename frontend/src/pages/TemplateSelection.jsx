import Navbar from '@/app-components/Navbar'
import ResumePDF from '@/app-components/ResumePDF'
import template1Image from '@/assets/template-1-sample.png'
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

const getSampleResumeData = () => ({
  fullName: 'John Doe',
  linkedinUrl: 'https://www.linkedin.com/in/johndoe',
  phoneNo: '(555) 123-4567',
  email: 'john.doe@example.com',
  summary: {
    flag: true,
    value: 'Experienced software engineer with 5+ years of expertise in full-stack development. Passionate about building scalable applications and mentoring junior developers.'
  },
  experience: {
    flag: true,
    values: [
      {
        heading: 'Senior Software Engineer',
        from_month_year: 'Jan 2021',
        to_month_year: 'Present',
        bullet_points: [
          'Led development of microservices architecture serving 100k+ users',
          'Improved application performance by 40% through optimization',
          'Mentored 5 junior developers and conducted code reviews'
        ]
      },
      {
        heading: 'Software Engineer',
        from_month_year: 'Jun 2019',
        to_month_year: 'Dec 2020',
        bullet_points: [
          'Built RESTful APIs using Node.js and Express',
          'Implemented responsive frontend using React and Chakra UI',
          'Collaborated with cross-functional teams on product features'
        ]
      }
    ]
  },
  education: {
    flag: true,
    values: [
      'Bachelor of Science in Computer Science - State University, 2019',
      'Full Stack Web Development Bootcamp - TechCamp Academy, 2018'
    ]
  },
  skills: {
    flag: true,
    values: [
      'JavaScript',
      'React',
      'Node.js',
      'MongoDB',
      'PostgreSQL',
      'AWS',
      'Docker',
      'Git'
    ]
  }
});

const TemplateSelection = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const resumeData = location.state?.resumeData || {}
  const sampleResumeData = getSampleResumeData()
  const [selectedTemplate, setSelectedTemplate] = useState('template1')

  const templates = [
    { id: 'template1', name: 'Template 1', description: 'Resume Template 1', src: template1Image },
    { id: 'template2', name: 'Template 2', description: 'Resume Template 2', src: template1Image },
    { id: 'template3', name: 'Template 3', description: 'Resume Template 3', src: template1Image },
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
                  src={template.src}
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
                  {loading ? 'Generating PDF...' : 'Download PDF'}
                </Button>
              )}
            </PDFDownloadLink>

            <PDFDownloadLink
              document={<ResumePDF resumeData={sampleResumeData} />}
              fileName="sample-resume.pdf"
            >
              {({ blob, url, loading, error }) => (
                <Button colorScheme="blue" size="lg" fontSize="lg" isDisabled={loading}>
                  {loading ? 'Generating PDF...' : 'Download Sample PDF'}
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
