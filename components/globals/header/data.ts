import {
  Badges,
  Book2,
  Books,
  BrandCodepen,
  BrandTripadvisor,
  CalendarEvent,
  Category,
  Code,
  Icon,
  ManualGearbox,
  Message2,
  MilitaryRank,
  Network,
  Notes,
  Notification,
  PresentationAnalytics,
  Propeller,
  School,
  UserPlus,
  Users,
} from 'tabler-icons-react'

export interface MapInner {
  name: string
  label: string
  endpoint: string
  Icon: Icon
}

export interface Map {
  [key: string]: MapInner
}

export const aboutUs: Map = {
  aboutJamia: {
    name: 'aboutJamia',
    label: 'About Jamia',
    endpoint: '/about-us/about-jamia',
    Icon: School,
  },
  aboutDepartment: {
    name: 'aboutDepartment',
    label: 'About Department',
    endpoint: '/about-us/about-department',
    Icon: Code,
  },
  visionAndMission: {
    name: 'visionAndMission',
    label: 'Vision and Mission',
    endpoint: '/about-us/vision-mission',
    Icon: BrandTripadvisor,
  },
  messageFromHod: {
    name: 'messageFromHod',
    label: 'Message from H.O.D.',
    endpoint: '/about-us/message-from-hod',
    Icon: Message2,
  },
  achievements: {
    name: 'achievements',
    label: 'Achievements',
    endpoint: '/about-us/achievements',
    Icon: MilitaryRank,
  },
  facilities: {
    name: 'facilities',
    label: 'Facilities',
    endpoint: '/about-us/facilities',
    Icon: Category,
  },
  testimonials: {
    name: 'testimonials',
    label: 'Testimonials',
    endpoint: '/about-us/testimonials',
    Icon: Notes,
  },
  events: {
    name: 'events',
    label: 'Events',
    endpoint: '/about-us/events',
    Icon: CalendarEvent,
  },
  devTeam: {
    name: 'devTeam',
    label: 'Development Team',
    endpoint: '/about-us/development-team',
    Icon: BrandCodepen,
  },
}

export const academic: Map = {
  coursesOffered: {
    name: 'coursesOffered',
    label: 'Courses Offered',
    endpoint: '/academic/courses-offered',
    Icon: Book2,
  },
  courseStructure: {
    name: 'courseStructure',
    label: 'Course Structure',
    endpoint: '/academic/course-structure',
    Icon: ManualGearbox,
  },
  notices: {
    name: 'notices',
    label: 'Notices',
    endpoint: '/academic/notices',
    Icon: Notification,
  },
  facultyMembers: {
    name: 'facultyMembers',
    label: 'Faculty Members',
    endpoint: '/academic/faculty-members',
    Icon: Users,
  },
  phdScholars: {
    name: 'phdScholars',
    label: 'Ph.D. Scholars',
    endpoint: '/academic/phd-scholars',
    Icon: Users,
  },
  students: {
    name: 'students',
    label: 'Students',
    endpoint: '/academic/students',
    Icon: Users,
  },
  staffMembers: {
    name: 'staffMembers',
    label: 'Staff Members',
    endpoint: '/academic/staff-members',
    Icon: Users,
  },
}

export const research: Map = {
  researchArea: {
    name: 'researchArea',
    label: 'Research Area',
    endpoint: '/research/research-area',
    Icon: PresentationAnalytics,
  },
  projects: {
    name: 'projects',
    label: 'Projects',
    endpoint: '/research/projects',
    Icon: Propeller,
  },
  publications: {
    name: 'publications',
    label: 'Publications',
    endpoint: '/research/publications',
    Icon: Books,
  },
}

export const adminLoggedIn: Map = {
  students: {
    name: 'students',
    label: 'Students',
    endpoint: '/admin/students',
    Icon: UserPlus,
  },
  achievements: {
    name: 'achievements',
    label: 'Achievements',
    endpoint: '/admin/achievements',
    Icon: Badges,
  },
  events: {
    name: 'events',
    label: 'Events',
    endpoint: '/admin/events',
    Icon: CalendarEvent,
  },
  company: {
    name: 'company',
    label: 'Company',
    endpoint: '/admin/company',
    Icon: BrandTripadvisor,
  },
  projects: {
    name: 'rojects',
    label: 'Projects',
    endpoint: '/admin/projects',
    Icon: Network,
  },
  research: {
    name: 'research',
    label: 'Research',
    endpoint: '/admin/research',
    Icon: PresentationAnalytics,
  },
}
