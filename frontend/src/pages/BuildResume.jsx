import Navbar from '@/app-components/Navbar'
import {
  Container,
  Heading,
  VStack,
  Input,
  Textarea,
  Checkbox,
  Button,
  HStack,
  Box,
  List,
  Stack,
  CloseButton,
  Field
} from '@chakra-ui/react'
import React, { useState } from 'react'

const BuildResume = () => {
  const [fullName, setFullName] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState({ flag: false, value: "" });
  const [experience, setExperience] = useState({ flag: false, values: [] });
  const [education, setEducation] = useState({ flag: false, values: [] });
  const [skills, setSkills] = useState({ flag: false, values: [] });

  // local temporary inputs for adding list items
  const [newExpPoint, setNewExpPoint] = useState("");
  const [newEduEntry, setNewEduEntry] = useState("");
  const [newSkill, setNewSkill] = useState("");

  // handlers for list items
  const addExperiencePoint = () => {
    if (!newExpPoint.trim()) return;
    setExperience((prev) => ({ ...prev, values: [...prev.values, newExpPoint.trim()], flag: true }));
    setNewExpPoint("");
  };
  const removeExperiencePoint = (index) => {
    setExperience((prev) => ({ ...prev, values: prev.values.filter((_, i) => i !== index) }));
  };

  const addEducationEntry = () => {
    if (!newEduEntry.trim()) return;
    setEducation((prev) => ({ ...prev, values: [...prev.values, newEduEntry.trim()], flag: true }));
    setNewEduEntry("");
  };
  const removeEducationEntry = (index) => {
    setEducation((prev) => ({ ...prev, values: prev.values.filter((_, i) => i !== index) }));
  };

  const addSkill = () => {
    if (!newSkill.trim()) return;
    setSkills((prev) => ({ ...prev, values: [...prev.values, newSkill.trim()], flag: true }));
    setNewSkill("");
  };
  const removeSkill = (index) => {
    setSkills((prev) => ({ ...prev, values: prev.values.filter((_, i) => i !== index) }));
  };

  return (
    <Container>
      <Navbar />
      <VStack spacing={6} align="stretch">
        <Heading size={"6xl"} textAlign="center">Enter Your Information</Heading>

        <Stack spacing={4}>
            <Field.Root>
              <Field.Label>Full name</Field.Label>
              <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Jane Doe" />
            </Field.Root>

            <Field.Root>
              <Field.Label>LinkedIn URL</Field.Label>
              <Input id="linkedinUrl" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} placeholder="https://www.linkedin.com/in/..." />
            </Field.Root>

            <HStack spacing={4}>
              <Field.Root flex={1}>
                <Field.Label>Phone</Field.Label>
                <Input id="phone" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} placeholder="(555) 555-5555" />
              </Field.Root>

              <Field.Root flex={1}>
                <Field.Label>Email</Field.Label>
                <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
              </Field.Root>
            </HStack>
        </Stack>

        <Box as="hr" borderColor="gray.200" my={4} />

        <Box>
          <HStack justify="space-between" mb={2}>
            <Box as="label" fontWeight="medium" mb={0}>Summary</Box>
            <Checkbox.Root
              checked={summary.flag}
              onCheckedChange={(e) => setSummary((prev) => ({ ...prev, flag: e.checked }))}
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Include</Checkbox.Label>
            </Checkbox.Root>
          </HStack>
          <Textarea
            value={summary.value}
            onChange={(e) => setSummary((prev) => ({ ...prev, value: e.target.value }))}
            placeholder="A short professional summary..."
            variant={!summary.flag ? "subtle" : "outline"}
            rows={4}
          />
        </Box>

        <Box as="hr" borderColor="gray.200" my={4} />

        <Box>
          <HStack justify="space-between" mb={2}>
            <Box as="label" fontWeight="medium" mb={0}>Experience</Box>
            <Checkbox.Root
              checked={experience.flag}
              onCheckedChange={(e) => setExperience((prev) => ({ ...prev, flag: e.checked }))}
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Include</Checkbox.Label>
            </Checkbox.Root>
          </HStack>

          {experience.flag && (
            <>
              <HStack>
                <Input
                  placeholder="Add experience bullet"
                  value={newExpPoint}
                  onChange={(e) => setNewExpPoint(e.target.value)}
                />
                <Button onClick={addExperiencePoint}>Add</Button>
              </HStack>

              <List.Root mt={3}>
                {experience.values.map((pt, i) => (
                  <List.Item key={i}>
                    <HStack justify="space-between">
                      <Box>{pt}</Box>
                      <CloseButton
                        size="sm"
                        aria-label="Remove experience"
                        onClick={() => removeExperiencePoint(i)}
                      />
                    </HStack>
                  </List.Item>
                ))}
              </List.Root>
            </>
          )}
        </Box>

        <Box as="hr" borderColor="gray.200" my={4} />

        <Box>
          <HStack justify="space-between" mb={2}>
            <Box as="label" fontWeight="medium" mb={0}>Education</Box>
            <Checkbox.Root
              checked={education.flag}
              onCheckedChange={(e) => setEducation((prev) => ({ ...prev, flag: e.checked }))}
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Include</Checkbox.Label>
            </Checkbox.Root>
          </HStack>

          {education.flag && (
            <>
              <HStack>
                <Input
                  placeholder="Add education entry (e.g., BSc Computer Science — University X)"
                  value={newEduEntry}
                  onChange={(e) => setNewEduEntry(e.target.value)}
                />
                <Button onClick={addEducationEntry}>Add</Button>
              </HStack>

              <List.Root mt={3}>
                {education.values.map((eEntry, i) => (
                  <List.Item key={i}>
                    <HStack justify="space-between">
                      <Box>{eEntry}</Box>
                      <CloseButton
                        size="sm"
                        aria-label="Remove education"
                        onClick={() => removeEducationEntry(i)}
                      />
                    </HStack>
                  </List.Item>
                ))}
              </List.Root>
            </>
          )}
        </Box>

        <Box as="hr" borderColor="gray.200" my={4} />

        <Box>
          <HStack justify="space-between" mb={2}>
            <Box as="label" fontWeight="medium" mb={0}>Skills</Box>
            <Checkbox.Root
              checked={skills.flag}
              onCheckedChange={(e) => setSkills((prev) => ({ ...prev, flag: e.checked }))}
            >
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>Include</Checkbox.Label>
            </Checkbox.Root>
          </HStack>

          {skills.flag && (
            <>
              <HStack>
                <Input
                  placeholder="Add a skill (e.g., React)"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                />
                <Button onClick={addSkill}>Add</Button>
              </HStack>

              <List.Root mt={3}>
                {skills.values.map((s, i) => (
                  <List.Item key={i}>
                    <HStack justify="space-between">
                      <Box>{s}</Box>
                      <CloseButton
                        size="sm"
                        aria-label="Remove skill"
                        onClick={() => removeSkill(i)}
                      />
                    </HStack>
                  </List.Item>
                ))}
              </List.Root>
            </>
          )}
        </Box>

        <Box as="hr" borderColor="gray.200" my={4} />

        <HStack justify="flex-end" pt={4}>
          <Button colorScheme="blue" onClick={() => {
            // example save/preview action - you can replace with real save
            const resumeObject = {
              fullName,
              linkedinUrl,
              phoneNo,
              email,
              summary,
              experience,
              education,
              skills,
            };
            console.log("Resume object:", resumeObject);
          }}>
            Save / Preview
          </Button>
        </HStack>
      </VStack>
    </Container>
  )
}

export default BuildResume