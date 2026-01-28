// Utility function to provide sample resume data for testing/demo purposes
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

export default getSampleResumeData;
