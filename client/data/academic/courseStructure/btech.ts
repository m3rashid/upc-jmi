export interface IBTechCourseStructure {
  id: string
  paperCode: string
  paperTitle: string
  // totalHours: [lecture, tutorial, practical, total]
  totalHours: number[]
  credits: number
  pdfLink?: string
}

export const bTechSem1: IBTechCourseStructure[] = [
  {
    id: 'AS 101',
    paperCode: 'AS 101',
    paperTitle: 'Communication Skills',
    totalHours: [3, 0, 0, 3],
    credits: 3,
  },
  {
    id: 'AS 151',
    paperCode: 'AS 151',
    paperTitle: 'Language Lab',
    totalHours: [0, 0, 2, 2],
    credits: 1,
  },
  {
    id: 'AS 102',
    paperCode: 'AS 102',
    paperTitle: 'Engg. Physics – I',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'AS 152',
    paperCode: 'AS 152',
    paperTitle: 'Engg. Physics Lab –I',
    totalHours: [0, 0, 2, 2],
    credits: 1,
  },
  {
    id: 'AS 103',
    paperCode: 'AS 103',
    paperTitle: 'Engg. Chemistry 2',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'AS 153',
    paperCode: 'AS 153',
    paperTitle: 'Engg. Chemistry Lab – I',
    totalHours: [0, 0, 2, 2],
    credits: 1,
  },
  {
    id: 'AS 104',
    paperCode: 'AS 104',
    paperTitle: 'Engg. Mathematics – I',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'ME 101',
    paperCode: 'ME 101',
    paperTitle: 'Basics of Mech. Engg.',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'CE 101',
    paperCode: 'CE 101',
    paperTitle: 'Basics of Civil & Environmental Engg.',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'EE 101',
    paperCode: 'EE 101',
    paperTitle: 'Basics of Electrical Engineering',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'ME 151',
    paperCode: 'ME 151',
    paperTitle: 'Workshop Practice',
    totalHours: [0, 0, 4, 4],
    credits: 2,
  },
]

export const bTechSem2: IBTechCourseStructure[] = [
  {
    id: 'AS 201',
    paperCode: 'AS 201',
    paperTitle: 'Human Resource Management',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'AS 202',
    paperCode: 'AS 202',
    paperTitle: 'Engg. Physics – II',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'AS 252',
    paperCode: 'AS 252',
    paperTitle: 'Engg. Physics Lab – II',
    totalHours: [0, 0, 2, 2],
    credits: 1,
  },
  {
    id: 'AS 203',
    paperCode: 'AS 203',
    paperTitle: 'Engg. Chemistry –II',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'AS 253',
    paperCode: 'AS 253',
    paperTitle: 'Engg. Chemistry Lab – II',
    totalHours: [0, 0, 2, 2],
    credits: 1,
  },
  {
    id: 'AS 204',
    paperCode: 'AS 204',
    paperTitle: 'Engg. Mathematics II',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'AS 205',
    paperCode: 'AS 205',
    paperTitle: 'Innovative Sc. & Tech.',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'EC 101',
    paperCode: 'EC 101',
    paperTitle: 'Basics of Electronics & Communication',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'CS 101',
    paperCode: 'CS 101',
    paperTitle: 'Fundamentals of Computer',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'ME 250',
    paperCode: 'ME 250',
    paperTitle: 'Engg. Graphics',
    totalHours: [0, 0, 4, 4],
    credits: 2,
  },
]

export const bTechSem3: IBTechCourseStructure[] = [
  {
    id: 'CEN 301',
    paperCode: 'CEN 301',
    paperTitle: 'Mathematics-III',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 302',
    paperCode: 'CEN 302',
    paperTitle: 'Discrete Mathematics',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 303',
    paperCode: 'CEN 303',
    paperTitle: 'Data Structure',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 304',
    paperCode: 'CEN 304',
    paperTitle: 'Digital Logic Theory',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'CEN 305',
    paperCode: 'CEN 305',
    paperTitle: 'Analog & Digital Communication',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'CEN 391',
    paperCode: 'CEN 391',
    paperTitle: 'Data Structure Lab',
    totalHours: [0, 0, 4, 4],
    credits: 2,
  },
  {
    id: 'CEN 392',
    paperCode: 'CEN 392',
    paperTitle: 'C Programming Lab',
    totalHours: [0, 0, 4, 4],
    credits: 2,
  },
  {
    id: 'CEN 393',
    paperCode: 'CEN 393',
    paperTitle: 'DLT Lab',
    totalHours: [0, 0, 2, 2],
    credits: 1,
  },
]

export const bTechSem4: IBTechCourseStructure[] = [
  {
    id: 'CEN 401',
    paperCode: 'CEN 401',
    paperTitle: 'Mathematics-IV',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 402',
    paperCode: 'CEN 402',
    paperTitle: 'Computer Organization',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'CEN 403',
    paperCode: 'CEN 403',
    paperTitle: 'System Software',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'CEN 404',
    paperCode: 'CEN 404',
    paperTitle: 'Operating System',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 405',
    paperCode: 'CEN 405',
    paperTitle: 'Database Management Systems',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 491',
    paperCode: 'CEN 491',
    paperTitle: 'DBMS Lab',
    totalHours: [0, 0, 4, 4],
    credits: 2,
  },
  {
    id: 'CEN 492',
    paperCode: 'CEN 492',
    paperTitle: 'Linux Lab',
    totalHours: [0, 0, 4, 4],
    credits: 2,
  },
  {
    id: 'CEN 493',
    paperCode: 'CEN 493',
    paperTitle: 'Operating System Lab',
    totalHours: [0, 0, 4, 4],
    credits: 2,
  },
]

export const bTechSem5: IBTechCourseStructure[] = [
  {
    id: 'CEN 501',
    paperCode: 'CEN 501',
    paperTitle: 'Computer Architecture',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'CEN 502',
    paperCode: 'CEN 502',
    paperTitle: 'Automata Theory',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 503',
    paperCode: 'CEN 503',
    paperTitle: 'Microprocessor',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'CEN 504',
    paperCode: 'CEN 504',
    paperTitle: 'Object Oriented Programming',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 505',
    paperCode: 'CEN 505',
    paperTitle: 'Computer Networks',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 591',
    paperCode: 'CEN 591',
    paperTitle: 'OOPs Lab',
    totalHours: [0, 0, 4, 4],
    credits: 2,
  },
  {
    id: 'CEN 592',
    paperCode: 'CEN 592',
    paperTitle: 'Microprocessor Lab	',
    totalHours: [0, 0, 2, 2],
    credits: 1,
  },
  {
    id: 'CEN 593',
    paperCode: 'CEN 593',
    paperTitle: 'Computer Network Lab',
    totalHours: [0, 0, 4, 4],
    credits: 2,
  },
]

export const bTechSem6: IBTechCourseStructure[] = [
  {
    id: 'CEN 601',
    paperCode: 'CEN 601',
    paperTitle: 'Analysis & Design of Algorithms',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 602',
    paperCode: 'CEN 602',
    paperTitle: 'Software Engineering',
    totalHours: [2, 1, 0, 4],
    credits: 3,
  },
  {
    id: 'CEN 603',
    paperCode: 'CEN 603',
    paperTitle: 'Compiler Design',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 604',
    paperCode: 'CEN 604',
    paperTitle: 'Embedded Systems',
    totalHours: [3, 1, 0, 2],
    credits: 4,
  },
  {
    id: 'CEN 605',
    paperCode: 'CEN 605',
    paperTitle: 'Parallel Computing	',
    totalHours: [2, 1, 0, 4],
    credits: 3,
  },
  {
    id: 'CEN 691',
    paperCode: 'CEN 691',
    paperTitle: 'Embedded Systems Lab',
    totalHours: [0, 0, 2, 4],
    credits: 2,
  },
  {
    id: 'CEN 692',
    paperCode: 'CEN 692',
    paperTitle: 'Compiler Design Lab',
    totalHours: [0, 0, 2, 4],
    credits: 2,
  },
  {
    id: 'CEN 693',
    paperCode: 'CEN 693',
    paperTitle: 'Seminar',
    totalHours: [0, 0, 1, 2],
    credits: 1,
  },
]

export const bTechSem7: IBTechCourseStructure[] = [
  {
    id: 'CEN 701',
    paperCode: 'CEN 701',
    paperTitle: 'Data Mining',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 7xx',
    paperCode: 'CEN 7xx',
    paperTitle: 'Elective I',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 7xy',
    paperCode: 'CEN 7xx',
    paperTitle: 'Elective II',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
  {
    id: 'CEN 7xz',
    paperCode: 'CEN 7xx',
    paperTitle: 'Elective III',
    totalHours: [3, 1, 0, 4],
    credits: 4,
  },
]

export const bTechSem8: IBTechCourseStructure[] = [
  {
    id: 'CEN 801',
    paperCode: 'CEN 801',
    paperTitle: 'Software Project Management',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'CEN 8xx',
    paperCode: 'CEN 8xx',
    paperTitle: 'Elective I',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'CEN 8xy',
    paperCode: 'CEN 8xx',
    paperTitle: 'Elective II',
    totalHours: [2, 1, 0, 3],
    credits: 3,
  },
  {
    id: 'CEN 891',
    paperCode: 'CEN 891',
    paperTitle: 'Lab Based on Elective I',
    totalHours: [0, 0, 4, 2],
    credits: 2,
  },
  {
    id: 'CEN 892',
    paperCode: 'CEN 892',
    paperTitle: 'Lab Based on Elective II',
    totalHours: [0, 0, 4, 2],
    credits: 2,
  },
  {
    id: 'majorProject',
    paperCode: '',
    paperTitle: 'Major Project',
    totalHours: [0, 0, 20, 20],
    credits: 10,
  },
]
