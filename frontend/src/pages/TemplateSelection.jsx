import Navbar from '@/app-components/Navbar'
import { Template1PDF, Template2PDF, Template3PDF } from '@/app-components/ResumePDF'
import template1Image from '@/assets/template-1-sample.png'
import template2Image from '@/assets/template-2-sample.png'
import template3Image from '@/assets/template-3-sample.png'
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
  Input,
  Field
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PDFDownloadLink, pdf } from '@react-pdf/renderer'
import { useUserStore } from '@/store/userStore'

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
  const [resumeName, setResumeName] = useState('')
  const [isPDFSaving, setIsPDFSaving] = useState(false);

  const templates = [
    { id: 'template1', name: 'Template 1', description: 'Resume Template 1', src: template1Image },
    { id: 'template2', name: 'Template 2', description: 'Resume Template 2', src: template2Image },
    { id: 'template3', name: 'Template 3', description: 'Resume Template 3', src: template3Image },
  ]

  const getTemplateComponent = (templateId, data) => {
    switch (templateId) {
      case 'template1':
        return <Template1PDF resumeData={data} />
      case 'template2':
        return <Template2PDF resumeData={data} />
      case 'template3':
        return <Template3PDF resumeData={data} />
      default:
        return <Template1PDF resumeData={data} />
    }
  }

  const savePdfToDatabase = async (base64data, userId, resName) => {
    try {
      const response = await fetch('/api/resume/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          resume_name: resName || 'My Resume',
          resume_body: base64data
        })
      })
      const data = await response.json()
      if (data.success) {
        alert('Resume saved to database successfully!')
      } else {
        alert('Failed to save resume: ' + data.message)
      }
    } catch (error) {
      console.error('Error saving resume:', error)
      alert('Error saving resume to database')
    }
  }

  const handleSaveResume = async (templateId) => {
    setIsPDFSaving(true);
    try {
        const MyDoc = getTemplateComponent(templateId, resumeData)
        
        const blob = await pdf(MyDoc).toBlob()

        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = async () => {
        const base64data = reader.result.split(',')[1] // Remove the data:application/pdf;base64, prefix
        
        const userId = useUserStore.getState().getLoggedInUserId();
        await savePdfToDatabase(base64data, userId, resumeName);
        };
        
    } catch (error) {
        console.error('Error rendering PDF:', error)
        alert('Error generating PDF')
    } finally {
        setIsPDFSaving(false)
    }
}

  return (
    <Container>
      <Navbar />
      <Box maxWidth="70%" mx="auto">
        <VStack spacing={8} align="stretch">
          <HStack justify="flex-start" pt={0}>
            <Button
              variant="outline"
              size="lg"
              fontSize="lg"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </HStack>

          <VStack spacing={2} align="center">
            <Box fontSize="sm" fontWeight="medium" color="blue.600">Step 2 of 2</Box>
            <Heading size="2xl" textAlign="center">
              Select a Template
            </Heading>
          </VStack>

            <Field.Root>
            <Field.Label fontSize="lg" fontWeight="medium" mb={2}>
                Resume Name
            </Field.Label>
            <Input
                placeholder="Enter resume name"
                value={resumeName}
                onChange={(e) => setResumeName(e.target.value)}
                size="lg"
            />
            </Field.Root>

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

          <HStack justify="center" pt={6}>
            {selectedTemplate === 'template1' && (
              <>
              <PDFDownloadLink
                document={<Template1PDF resumeData={resumeData} />}
                fileName={`${resumeName || 'resume'}.pdf`}
              >
                {({ blob, url, loading, error }) => (
                  <Button colorScheme="blue" size="lg" fontSize="lg" isDisabled={loading}>
                    {loading ? 'Generating PDF...' : 'Download PDF'}
                  </Button>
                )}
              </PDFDownloadLink>
              
              <PDFDownloadLink
                document={<Template1PDF resumeData={sampleResumeData} />}
                fileName="sample-resume.pdf"
              >
                {({ blob, url, loading, error }) => (
                  <Button colorScheme="blue" size="lg" fontSize="lg" isDisabled={loading}>
                    {loading ? 'Generating PDF...' : 'Download Sample PDF'}
                  </Button>
                )}
              </PDFDownloadLink>
                </>
            )}

            {selectedTemplate === 'template2' && (
              <>
              <PDFDownloadLink
                document={<Template2PDF resumeData={resumeData} />}
                fileName={`${resumeName || 'resume'}.pdf`}
              >
                {({ blob, url, loading, error }) => (
                  <Button colorScheme="blue" size="lg" fontSize="lg" isDisabled={loading}>
                    {loading ? 'Generating PDF...' : 'Download PDF'}
                  </Button>
                )}
              </PDFDownloadLink>

              <PDFDownloadLink
                document={<Template2PDF resumeData={sampleResumeData} />}
                fileName="sample-resume.pdf"
              >
                {({ blob, url, loading, error }) => (
                  <Button colorScheme="blue" size="lg" fontSize="lg" isDisabled={loading}>
                    {loading ? 'Generating PDF...' : 'Download Sample PDF'}
                  </Button>
                )}
              </PDFDownloadLink>
              </>
            )}

            {selectedTemplate === 'template3' && (
              <>
              <PDFDownloadLink
                document={<Template3PDF resumeData={resumeData} />}
                fileName={`${resumeName || 'resume'}.pdf`}
              >
                {({ blob, url, loading, error }) => (
                  <Button colorScheme="blue" size="lg" fontSize="lg" isDisabled={loading}>
                    {loading ? 'Generating PDF...' : 'Download PDF'}
                  </Button>
                )}
              </PDFDownloadLink>

              <PDFDownloadLink
                document={<Template3PDF resumeData={sampleResumeData} />}
                fileName="sample-resume.pdf"
              >
                {({ blob, url, loading, error }) => (
                  <Button colorScheme="blue" size="lg" fontSize="lg" isDisabled={loading}>
                    {loading ? 'Generating PDF...' : 'Download Sample PDF'}
                  </Button>
                )}
              </PDFDownloadLink>
              </>
            )}

            <Button colorScheme="green" size="lg" fontSize="lg" loading={isPDFSaving}
                onClick={() => handleSaveResume(selectedTemplate)}>
              Save PDF
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Container>
  )
}

export default TemplateSelection
