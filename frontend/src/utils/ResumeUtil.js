// Utility function to provide sample resume data for testing/demo purposes
const getSampleResumeData = () => ({
  fullName: 'John Doe',
  linkedinUrl: 'https://www.linkedin.com/in/johndoe',
  phoneNo: '(555) 123-4567',
  email: 'john.doe@example.com',
  summary: {
    flag: true,
    value: 'Experienced software engineer with 5+ years of expertise in full-stack development. Passionate about building scalable, high-performance applications and mentoring junior developers. Adept at leading cross-functional teams, architecting cloud-native solutions, and driving continuous improvement in agile environments. Proven track record of delivering complex projects on time and within budget, with a strong focus on code quality, security, and user experience. Seeking to leverage my technical and leadership skills to make a significant impact at a forward-thinking company.'
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
          'Mentored 5 junior developers and conducted code reviews',
          'Architected and deployed scalable solutions on AWS using Docker and Kubernetes',
          'Championed adoption of automated testing and CI/CD pipelines'
        ]
      },
      {
        heading: 'Software Engineer',
        from_month_year: 'Jun 2019',
        to_month_year: 'Dec 2020',
        bullet_points: [
          'Built RESTful APIs using Node.js and Express',
          'Implemented responsive frontend using React and Chakra UI',
          'Collaborated with cross-functional teams on product features',
          'Wrote unit and integration tests to ensure code reliability',
          'Participated in agile ceremonies and sprint planning'
        ]
      },
      {
        heading: 'Junior Software Developer',
        from_month_year: 'Jan 2018',
        to_month_year: 'May 2019',
        bullet_points: [
          'Assisted in developing internal tools for data analysis',
          'Maintained legacy codebase and performed bug fixes',
          'Created technical documentation and user guides',
          'Supported deployment and monitoring of production systems'
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
