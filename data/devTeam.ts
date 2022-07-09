type IContri =
  | '💻' // code
  | '🔣' // testing
  | '🎨' // design
  | '🤔' // ideas
  | '📓' // data
  | '📆' // management
  | '🚧' // maintenance
  | '👀' // reviews
  | '🐛' // bugs

interface IDevTeam {
  id: string
  name: string
  photo: string
  department: string
  batch: string
  contri: IContri[]
  github?: string
  linkedin?: string
  twitter?: string
  instagram?: string
  portfolio?: string
  phone?: string
  email?: string
}

const devTeam: IDevTeam[] = [
  {
    id: 'm3rashid',
    name: 'MD Rashid Hussain',
    photo: '',
    department: 'Computer Science',
    batch: '2020 - 24',
    contri: ['💻', '🎨', '🤔', '🚧', '📆'],
    github: 'https://github.com/m3rashid',
    linkedin: 'https://www.linkedin.com/in/m3rashid/',
    twitter: 'https://twitter.com/m3_rashid',
    instagram: 'https://www.instagram.com/m3_rashid/',
    portfolio: 'https://m3rashid.netlify.app/',
    phone: '+91 8002594916',
    email: 'm3rashid.hussain@gmail.com',
  },
]

export default devTeam
