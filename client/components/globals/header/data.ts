export interface MapInner {
  name: string
  label: string
  endpoint: string
}

export interface Map {
  [key: string]: MapInner
}

export const aboutUs: Map = {
  aboutJamia: {
    name: 'aboutJamia',
    label: 'About Jamia',
    endpoint: '/about-us/about-jamia',
  },
  aboutDepartment: {
    name: 'aboutDepartment',
    label: 'About Department',
    endpoint: '/about-us/about-department',
  },
  visionAndMission: {
    name: 'visionAndMission',
    label: 'Vision and Mission',
    endpoint: '/about-us/vision-mission',
  },
  messageFromHod: {
    name: 'messageFromHod',
    label: 'Message from H.O.D.',
    endpoint: '/about-us/message-from-hod',
  },
  achievements: {
    name: 'achievements',
    label: 'Achievements',
    endpoint: '/about-us/achievements',
  },
  facilities: {
    name: 'facilities',
    label: 'Facilities',
    endpoint: '/about-us/facilities',
  },
  testimonials: {
    name: 'testimonials',
    label: 'Testimonials',
    endpoint: '/about-us/testimonials',
  },
  events: {
    name: 'events',
    label: 'Events',
    endpoint: '/about-us/events',
  },
}

export const academic: Map = {
  coursesOffered: {
    name: 'coursesOffered',
    label: 'Courses Offered',
    endpoint: '/academic/courses-offered',
  },
  courseStructure: {
    name: 'courseStructure',
    label: 'Course Structure',
    endpoint: '/academic/course-structure',
  },
  notices: {
    name: 'notices',
    label: 'Notices',
    endpoint: '/academic/notices',
  },
  facultyMembers: {
    name: 'facultyMembers',
    label: 'Faculty Members',
    endpoint: '/academic/faculty-members',
  },
  phdScholars: {
    name: 'phdScholars',
    label: 'Ph.D. Scholars',
    endpoint: '/academic/phd-scholars',
  },
  students: {
    name: 'students',
    label: 'Students',
    endpoint: '/academic/students',
  },
  staffMembers: {
    name: 'staffMembers',
    label: 'Staff Members',
    endpoint: '/academic/staff-members',
  },
}

export const research: Map = {
  researchArea: {
    name: 'researchArea',
    label: 'Research Area',
    endpoint: '/research/research-area',
  },
  projects: {
    name: 'projects',
    label: 'Projects',
    endpoint: '/research/projects',
  },
  publications: {
    name: 'publications',
    label: 'Publications',
    endpoint: '/research/publications',
  },
}

export const admin: Map = {
  //   login: {
  //     name: 'login',
  //     label: 'Login',
  //     endpoint: '/admin/login',
  //   },
}
