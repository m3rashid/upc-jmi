import {
  Home2,
  Award,
  DeviceDesktopAnalytics,
  UserSearch,
  CalendarStats,
  Blockquote,
  Users,
  AugmentedReality,
  Atom,
  Badge,
  ArrowUpRight,
} from 'tabler-icons-react'

const data = [
  { icon: Home2, label: 'Home', to: '/' },
  { icon: ArrowUpRight, label: 'Placements', to: '/placements' },

  { icon: Award, label: 'Achievements', to: '/about-us/achievements' },
  { icon: DeviceDesktopAnalytics, label: 'Events', to: '/about-us/events' },
  { icon: Blockquote, label: 'Testimonials', to: '/about-us/testimonials' },

  { icon: CalendarStats, label: 'Notices', to: '/academic/notices' },
  { icon: UserSearch, label: 'Phd Scholars', to: '/academic/phd-scholars' },
  { icon: Users, label: 'Students', to: '/academic/students' },

  { icon: AugmentedReality, label: 'Projects', to: '/research/projects' },
  { icon: Badge, label: 'Publications', to: '/research/publications' },
  {
    icon: Atom,
    label: 'Research Area',
    to: '/research/research-area',
  },
]

export default data
