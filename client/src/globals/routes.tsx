import { Container, createStyles, Loader, useMantineTheme } from '@mantine/core'
import React from 'react'
import { Routes as Router, Route, Navigate } from 'react-router-dom'
import BreadCrumbs from './breadCrumbs'

const Home = React.lazy(() => import('../pages/home'))
const Placement = React.lazy(() => import('../pages/placement'))

// about Us
const AboutJamia = React.lazy(() => import('../pages/aboutUs/aboutJamia'))
const AboutDepartment = React.lazy(
  () => import('../pages/aboutUs/aboutDepartment')
)
const VisionAndMission = React.lazy(
  () => import('../pages/aboutUs/visionAndMission')
)
const MessageFromHod = React.lazy(
  () => import('../pages/aboutUs/messageFromHod')
)
const Achievements = React.lazy(() => import('../pages/aboutUs/achievements'))
const Facilities = React.lazy(() => import('../pages/aboutUs/facilities'))
const Testimonials = React.lazy(() => import('../pages/aboutUs/testimonials'))
const Events = React.lazy(() => import('../pages/aboutUs/events'))

// Academic
const CoursesOffered = React.lazy(
  () => import('../pages/academic/coursesOffered')
)
const CourseStructure = React.lazy(
  () => import('../pages/academic/courseStructure')
)
const Notices = React.lazy(() => import('../pages/academic/notices'))
const FacultyMembers = React.lazy(
  () => import('../pages/academic/facultyMembers')
)
const PhdScholars = React.lazy(() => import('../pages/academic/phdScholars'))
const Students = React.lazy(() => import('../pages/academic/students'))
const StaffMembers = React.lazy(() => import('../pages/academic/staffMembers'))

// Research
const ResearchArea = React.lazy(() => import('../pages/research/researchArea'))
const Projects = React.lazy(() => import('../pages/research/projects'))
const Publication = React.lazy(() => import('../pages/research/publication'))
const NotFound = React.lazy(() => import('../pages/404'))

export const useStyles = createStyles((theme) => ({
  root: {
    minHeight: '100vh',
    paddingTop: '10px',
    paddingBottom: '50px',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
  },
}))

const Routes = () => {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <div className={classes.root}>
      <Container>
        <BreadCrumbs />
        <React.Suspense fallback={<Loader color={theme.primaryColor} />}>
          <Router>
            <Route path="/" element={<Home />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/about-us">
              <Route
                path=""
                element={<Navigate to="/about-us/about-jamia" />}
              />
              <Route path="about-jamia" element={<AboutJamia />} />
              <Route path="about-department" element={<AboutDepartment />} />
              <Route path="vision-mission" element={<VisionAndMission />} />
              <Route path="message-from-hod" element={<MessageFromHod />} />
              <Route path="achievements" element={<Achievements />} />
              <Route path="facilities" element={<Facilities />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="events" element={<Events />} />
            </Route>
            <Route path="/academic">
              <Route
                path=""
                element={<Navigate to="/academic/courses-offered" />}
              />
              <Route path="courses-offered" element={<CoursesOffered />} />
              <Route path="course-structure" element={<CourseStructure />} />
              <Route path="notices" element={<Notices />} />
              <Route path="faculty-members" element={<FacultyMembers />} />
              <Route path="phd-scholars" element={<PhdScholars />} />
              <Route path="students" element={<Students />} />
              <Route path="staff-members" element={<StaffMembers />} />
            </Route>
            <Route path="/research">
              <Route
                path=""
                element={<Navigate to="/research/research-area" />}
              />
              <Route path="research-area" element={<ResearchArea />} />
              <Route path="projects" element={<Projects />} />
              <Route path="publications" element={<Publication />} />
            </Route>
            <Route path="/admin"></Route>
            <Route path="*" element={<NotFound />} />
          </Router>
        </React.Suspense>
      </Container>
    </div>
  )
}

export default Routes
