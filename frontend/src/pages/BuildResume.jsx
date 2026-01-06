import Navbar from '@/app-components/Navbar'
import ResumePDF from '@/app-components/ResumePDF'
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
import { PDFDownloadLink } from '@react-pdf/renderer'

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
  const [newExpElement, setNewExpElement] = useState({ heading: "", from_month_year: "", to_month_year: "" });
  const [expBulletInputs, setExpBulletInputs] = useState({});
  const [newEduEntry, setNewEduEntry] = useState("");
  const [newSkill, setNewSkill] = useState("");

  // handlers for list items
  const addExperienceElement = () => {
    if (!newExpElement.heading.trim()) return;
    const newExpEntry = {
      heading: newExpElement.heading.trim(),
      from_month_year: newExpElement.from_month_year.trim(),
      to_month_year: newExpElement.to_month_year.trim(),
      bullet_points: []
    };
    setExperience((prev) => ({ ...prev, values: [...prev.values, newExpEntry], flag: true }));
    setNewExpElement({ heading: "", from_month_year: "", to_month_year: "" });
  };

  const addExperienceBullet = (expIndex) => {
    const bulletText = expBulletInputs[expIndex] || "";
    if (!bulletText.trim()) return;
    setExperience((prev) => ({
      ...prev,
      values: prev.values.map((exp, i) =>
        i === expIndex
          ? { ...exp, bullet_points: [...exp.bullet_points, bulletText.trim()] }
          : exp
      )
    }));
    setExpBulletInputs((prev) => ({ ...prev, [expIndex]: "" }));
  };

  const removeExperienceElement = (index) => {
    setExperience((prev) => ({ ...prev, values: prev.values.filter((_, i) => i !== index) }));
  };

  const removeExperienceBullet = (expIndex, bulletIndex) => {
    setExperience((prev) => {
      const updatedValues = [...prev.values];
      updatedValues[expIndex].bullet_points = updatedValues[expIndex].bullet_points.filter((_, i) => i !== bulletIndex);
      return { ...prev, values: updatedValues };
    });
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
      <Box maxWidth="50%" mx="auto">
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
              <VStack spacing={4} align="stretch" mb={4}>
                <Field.Root>
                  <Field.Label>Job Title / Heading</Field.Label>
                  <Input
                    placeholder="e.g., Senior Software Engineer"
                    value={newExpElement.heading}
                    onChange={(e) => setNewExpElement((prev) => ({ ...prev, heading: e.target.value }))}
                  />
                </Field.Root>
                <HStack spacing={4}>
                  <Field.Root flex={1}>
                    <Field.Label>From (Month/Year)</Field.Label>
                    <Input
                      placeholder="Jan 2020"
                      value={newExpElement.from_month_year}
                      onChange={(e) => setNewExpElement((prev) => ({ ...prev, from_month_year: e.target.value }))}
                    />
                  </Field.Root>
                  <Field.Root flex={1}>
                    <Field.Label>To (Month/Year)</Field.Label>
                    <Input
                      placeholder="Dec 2023"
                      value={newExpElement.to_month_year}
                      onChange={(e) => setNewExpElement((prev) => ({ ...prev, to_month_year: e.target.value }))}
                    />
                  </Field.Root>
                </HStack>
                <Button onClick={addExperienceElement} colorScheme="blue">Add Experience</Button>
              </VStack>

              <List.Root mt={3}>
                {experience.values.map((exp, expIndex) => (
                  <List.Item key={expIndex} mb={6} pb={4} borderBottomWidth="1px" borderColor="gray.200">
                    <VStack align="stretch" spacing={3}>
                      <HStack justify="space-between">
                        <Box>
                          <Box fontWeight="bold">{exp.heading}</Box>
                          <Box fontSize="sm" color="gray.600">
                            {exp.from_month_year} {exp.to_month_year && `- ${exp.to_month_year}`}
                          </Box>
                        </Box>
                        <CloseButton
                          size="sm"
                          aria-label="Remove experience"
                          onClick={() => removeExperienceElement(expIndex)}
                        />
                      </HStack>

                      <VStack align="stretch" spacing={2} pl={4}>
                        <Box fontSize="sm" fontWeight="medium">Bullet Points:</Box>
                        {exp.bullet_points.length > 0 && (
                          <List.Root ps="4">
                            {exp.bullet_points.map((bullet, bulletIndex) => (
                              <List.Item key={bulletIndex}>
                                <HStack justify="space-between">
                                  <Box>{bullet}</Box>
                                  <CloseButton
                                    size="xs"
                                    aria-label="Remove bullet"
                                    onClick={() => removeExperienceBullet(expIndex, bulletIndex)}
                                  />
                                </HStack>
                              </List.Item>
                            ))}
                          </List.Root>
                        )}
                        <HStack>
                          <Input
                            placeholder="Add bullet point"
                            size="sm"
                            value={expBulletInputs[expIndex] || ""}
                            onChange={(e) => setExpBulletInputs((prev) => ({ ...prev, [expIndex]: e.target.value }))}
                          />
                          <Button size="sm" onClick={() => addExperienceBullet(expIndex)}>Add</Button>
                        </HStack>
                      </VStack>
                    </VStack>
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
          <PDFDownloadLink
            document={<ResumePDF resumeData={{
              fullName,
              linkedinUrl,
              phoneNo,
              email,
              summary,
              experience,
              education,
              skills,
            }} />}
            fileName="resume-gen.pdf"
          >
            {({ blob, url, loading, error }) => (
              <Button isDisabled={loading}>
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

export default BuildResume