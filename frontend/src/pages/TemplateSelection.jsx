import Navbar from '@/app-components/Navbar'
import template1Image from '@/assets/template-1-sample.png'
import template2Image from '@/assets/template-2-sample.png'
import template3Image from '@/assets/template-3-sample.png'
import template4Image from '@/assets/template-4-sample.png'
import template5Image from '@/assets/template-5-sample.png'
import template6Image from '@/assets/template-6-sample.png'
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
import { toaster } from '../components/ui/toaster';
import { useUserStore } from '@/store/userStore'
import { MdVisibility, MdSave, MdDownload } from 'react-icons/md';
import { authFetch } from '../utils/api';

let pdfModuleCache = null;

const loadPdfModules = async () => {
  if (pdfModuleCache) return pdfModuleCache;

  const [{ pdf }, templates] = await Promise.all([
    import('@react-pdf/renderer'),
    import('@/app-components/ResumePDF'),
  ]);

  pdfModuleCache = {
    pdf,
    Template1PDF: templates.Template1PDF,
    Template2PDF: templates.Template2PDF,
    Template3PDF: templates.Template3PDF,
    Template4PDF: templates.Template4PDF,
    Template5PDF: templates.Template5PDF,
    Template6PDF: templates.Template6PDF,
  };

  return pdfModuleCache;
};

const TemplateSelection = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const resumeData = location.state?.resumeData || {}
  const [selectedTemplate, setSelectedTemplate] = useState('template1')
  const [resumeName, setResumeName] = useState('')
  const [isPDFSaving, setIsPDFSaving] = useState(false);

  const templates = [
    { id: 'template1', name: 'Classic', description: 'Clean single-column layout', src: template1Image },
    { id: 'template2', name: 'Emerald Sidebar', description: 'Mint green left sidebar', src: template2Image },
    { id: 'template3', name: 'Purple Pro', description: 'Bold purple header, two-column body', src: template3Image },
    { id: 'template4', name: 'Teal & Coral', description: 'Teal header with coral accents', src: template4Image },
    { id: 'template5', name: 'Navy & Gold', description: 'Dark navy right sidebar with gold accents', src: template5Image },
    { id: 'template6', name: 'Rose & Slate', description: 'Deep rose header with highlighted sections', src: template6Image },
  ]

  const getTemplateComponent = (templateId, data, templates) => {
    const { Template1PDF, Template2PDF, Template3PDF, Template4PDF, Template5PDF, Template6PDF } = templates;

    switch (templateId) {
      case 'template1':
        return <Template1PDF resumeData={data} />
      case 'template2':
        return <Template2PDF resumeData={data} />
      case 'template3':
        return <Template3PDF resumeData={data} />
      case 'template4':
        return <Template4PDF resumeData={data} />
      case 'template5':
        return <Template5PDF resumeData={data} />
      case 'template6':
        return <Template6PDF resumeData={data} />
      default:
        return <Template1PDF resumeData={data} />
    }
  }

  const handlePreview = async () => {
    const { pdf, ...templates } = await loadPdfModules();
    const doc = getTemplateComponent(selectedTemplate, resumeData, templates);
    const blob = await pdf(doc).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

    const handleDownloadPDF = async (data, fileName) => {
      const { pdf, ...templates } = await loadPdfModules();
      const doc = getTemplateComponent(selectedTemplate, data, templates);
      const blob = await pdf(doc).toBlob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName || 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    };

  const savePdfToDatabase = async (base64data, userId, resName) => {
    try {
      const response = await authFetch('/api/resume/save', {
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
        toaster.create({
          title: 'Success',
          description: 'Resume saved to database successfully!',
          type: 'success',
        });
      } else {
        toaster.create({
          title: 'Error',
          description: 'Failed to save resume: ' + data.message,
          type: 'error',
        });
      }
    } catch (error) {
      console.error('Error saving resume:', error)
      toaster.create({
        title: 'Error',
        description: 'Error saving resume to database',
        type: 'error',
      });
    }
  }

  const handleSaveResume = async (templateId) => {
    setIsPDFSaving(true);
    try {
        const { pdf, ...templates } = await loadPdfModules();
        const MyDoc = getTemplateComponent(templateId, resumeData, templates)
        
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
        toaster.create({
          title: 'Error',
          description: 'Error generating PDF',
          type: 'error',
        });
    } finally {
        setIsPDFSaving(false)
        navigate('/dashboard');
    }
  }

  return (
    <Container ml={{ base: 0, md: '220px' }} maxW="calc(100vw - 220px)">
      <Navbar />
      <Box maxWidth="70%" mx="auto">
        <VStack spacing={8} align="stretch" mt={8}>
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

          <HStack justify="center" pt={6} spacing={4}>
            <Button size="lg" fontSize="lg" onClick={handlePreview} >
              <MdVisibility /> Preview PDF
            </Button>
            <Button size="lg" fontSize="lg" onClick={() => handleDownloadPDF(resumeData, (resumeName || 'resume') + '.pdf')} >
              <MdDownload /> Download PDF
            </Button>
            <Button size="lg" fontSize="lg" loading={isPDFSaving} onClick={() => handleSaveResume(selectedTemplate)} >
              <MdSave /> Save PDF
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Container>
  )
}

export default TemplateSelection
