export type IShortName =
  | 'clab1'
  | 'clab2'
  | 'researchLab'
  | 'hardwareLab'
  | 'advCLab'
  | 'iotLab'
  | 'library'
  | 'canteen'

export interface IFacility {
  id: string
  title: string
  shortName: IShortName
  description: { id: string; text: string }[]
  imageSrc?: string
}

export const facilityList: IFacility[] = [
  {
    id: 'c1',
    title: 'Computer Lab I',
    shortName: 'clab1',
    imageSrc: '/images/favicon.jpg',
    description: [
      {
        id: 'c11',
        text: 'The Apple Lab has 60 computers based on dual boot Mac OS and Windows equipped with Intel Core I5- 2400S CPU @ 2.50GHz, RAM: 4GB, HDD: 500GB, Mac OS 10.6.7, installed with softwares: DevC++, Codeblocks, JDK, MySQL 5.0, Adobe Reader.',
      },
      {
        id: 'c12',
        text: 'This lab provides excellent facility for conducting Data Structure, DBMS, Operating System labs.',
      },
    ],
  },
  {
    id: 'c2',
    title: 'Computer Lab II',
    shortName: 'clab2',
    imageSrc: '/images/favicon.jpg',
    description: [
      {
        id: 'c21',
        text: 'Programming Lab is well equipped with 40 Intel Core I5 -4590 CPU @3.3GHz *4 RAM: 4GB, HDD: 500GB, OS: Window, Ubuntu 16.10, Softwares: TurboC++, Codeblocks, DevC++, Intellij, LibreOffice, Jdk, Python 3.6(Anaconda 3), Sublime, Vim Editor . This lab is speacially dedicated for conducting C Programming, Compiler, Computer Network Lab.',
      },
    ],
  },
  {
    id: 'c3',
    title: 'Research Lab',
    shortName: 'researchLab',
    imageSrc: '/images/favicon.jpg',
    description: [],
  },
  {
    id: 'c4',
    title: 'Hardware Lab',
    shortName: 'hardwareLab',
    imageSrc: '/images/favicon.jpg',
    description: [
      {
        id: 'c41',
        text: 'The Hardware Lab consists of number of digital logic trainers which uses various integrated circuits of various gates for hardware implementation. This lab gives knowledge of electronics and communication.',
      },
    ],
  },
  {
    id: 'c5',
    title: 'Advance Computing Lab',
    shortName: 'advCLab',
    imageSrc: '/images/favicon.jpg',
    description: [
      {
        id: 'c51',
        text: 'The Advance Computing Lab consists of Intel CoreTM I3 -6100 CPU @3.70 GHz RAM: 4GB HDD: 500 GB OS : Windows 10 Software: Dev C++, Glassfish Server Open source, JDK, Jetbeans Pycharm, Netbeans 8.1, Python 3.6.0 ( Anaconda 3), TC++',
      },
    ],
  },
  {
    id: 'c6',
    title: 'Embedded IOT & Wireless Sensor Lab',
    shortName: 'iotLab',
    imageSrc: '/images/favicon.jpg',
    description: [
      {
        id: 'c61',
        text: 'The Embedded IOT & Wireless Sensor Lab consists of CUDA OPEN CL, IOT equipments, Wireless Sensor equipments',
      },
    ],
  },
  {
    id: 'c7',
    title: 'Library',
    shortName: 'library',
    imageSrc: '/images/favicon.jpg',
    description: [
      {
        id: 'c71',
        text: 'Library in today’s time is an essential part of an educational institute. At the library of Faculty of Engineering and technology, the students and staff have access to a variety of resources related to academics and research. Large number of books are available in library on almost every section of engineering. Apart from books,',
      },
      {
        id: 'c72',
        text: 'library also provides facility of accessing internet resources through computers in a separate section. Students get issued book of their interest for a specified time period. Library provides a range of learning opportunities for both large and small groups as well as individuals with a focus on intellectual content, information literacy, and the learner. Library serves as a learning space for students to do independent work, use computers, research materials for increasing their knowledge.',
      },
    ],
  },
  {
    id: 'c8',
    title: 'Canteen',
    shortName: 'canteen',
    imageSrc: '/images/favicon.jpg',
    description: [
      {
        id: 'c81',
        text: 'The canteen of Faculty of Engineering and Technology is a two storey building which is well ventilated with adequate lighting facility and an open air environment . Canteen serves a variety of food prepared in hygienic conditions.',
      },
      {
        id: 'c82',
        text: 'The food is of excellent quality and at very affordable rates. The college canteen plays an important role in this regard by catering the daily nutritional requirements of students and staff members as well. Canteen builds up an ambience of rendezvous where students have food and spend time with friends, keeping away all the hassles of mundane living. The food is served here for breakfast, lunch and evening, which includes snacks.',
      },
    ],
  },
]
