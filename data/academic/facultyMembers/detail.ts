export interface IString {
  id: string
  text: string
}

export interface IDetail {
  id: string
  name: string
  department: string
  address: string
  phone: string
  emails: string[]
  description: IString[]
  classesTaught: IString[]
  coursesTaught: IString[]
}

export type IFacultyId =
  | 'balam'
  | 'ndoja'
  | 'tanv'
  | 'mamjad'
  | 'sarfm'
  | 'mumahm'
  | 'musheerah'
  | 'zeeans'
  | 'faiyaah'
  | 'danishRiz'
  | 'jlal'
  | 'shshza'
  | 'shamah'
  | 'hnnman'
  | 'wasahm'

export const facultyDetails: IDetail[] = [
  {
    id: 'balam',
    name: 'Prof. Bashir Alam',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: 'not available',
    emails: ['balam2@jmi.ac.in', 'babashirala@gmail.com'],
    description: [
      {
        id: 'curr',
        text: 'Prof. Bashir Alam is currently Associate Professor in the Department of Computer Engineering, Faculty of Engineering and Technology, Jamia Millia Islamia (A Central University), New Delhi-110025',
      },
      {
        id: 'exp',
        text: 'He has more than 15 years of teaching experience at post graduate, graduate and under graduate level',
      },
      {
        id: 'edu',
        text: 'He received his B.Tech.(Computer Engineering) from Aligarh Muslim University Aligarh, Uttar Pradesh, India in 2000 with division First(Hons.)(8.6 /10 CPI), M.Tech. (IT) from IP University, Delhi, India in 2006 with division first (73 % marks), Ph.D.(Computer Engineering) from Jamia Millia Islamia, New Delhi, India in 2010',
      },
      {
        id: 'prev',
        text: 'He previously worked as Lecturer, Department of Computer Science, Jamia Hamdard, New Delhi-110062 from 04/07/2000 to 21/09/2006. He was Principal Investigator for the following Funded Research Projects',
      },
      {
        id: 'proj1',
        text: 'GPU based Router using Multigraph”, funded by Jamia Millia Islamia, amount 1 lakh.',
      },
      {
        id: 'proj2',
        text: '“NVIDIA CUDA teaching Centre” funded by NVIDIA by means of donating one Tesla K20, two Quadro K5000 and two GTX 750 GPU along with two jetson TK1 Board and Books worth 6 Lakhs.',
      },
      {
        id: 'proj3',
        text: 'A Major Research Project funded by Ministry of IT and Communication, government of India, amount 39.30 Lakhs (recommended by working group, Sanction letter is awaited).',
      },
      {
        id: 'research',
        text: 'Prof Bashir Alam has published a total of 48 papers in which 22 of them are in journals, 24 of them are in International conferences and 2 are in national conference. He has also done Short term Course on High Performance Parallel and Enterprise Computing, April 12 – 18 2010, I.I.T. Kharagpur, India.',
      },
      {
        id: 'memberships',
        text: 'Prof Bashir Alam has got CCNA and CCAI certification. He is a life time member of ISTE (Indian Society for Technical Education). He is Member of Board of Studies and faculty committee, Department of Computer Engineering, Jamia Millia Islamia, New Delhi. He was also Member of Board of Studies and faculty committee, Department of Computer Science, Jamia Hamdard, New Delhi.',
      },
      {
        id: 'accomplishments',
        text: 'Prof Bashir Alam was also coach of Jamia Hamdard team for the 2003 ACM Asia ICPC(International Collegiate Programming Contest) at IIT Roorkee (10th Place) Coach and coach of Jamia Millia Islamia team for the 2014 ACM Asia ICPC(International Collegiate• Programming Contest) at IIIT Gwalior. He is also member of organizing team of Algorythm 2007 and Algorythm 2008 of department of Computer Engineering, Jamia Millia Islamia, New Delhi.',
      },
    ],
    classesTaught: [
      {
        id: 'phd',
        text: 'Ph.D.(course work)',
      },
      {
        id: 'mtech',
        text: 'M.Tech.(Computer Engineering)',
      },
      {
        id: 'btech',
        text: 'B.Tech./B.E.(Computer Engineering)',
      },
      {
        id: 'mca',
        text: 'M.C.A.',
      },
      {
        id: 'mscit',
        text: 'M.Sc.(Computer Science/ Information Technology)',
      },
      {
        id: 'mscmath',
        text: 'M.Sc.(Maths with Computer Science)',
      },
      {
        id: 'bsc',
        text: 'B.C.A. /B.Sc.(Computer Science/ Information Technology)/B.I.T.',
      },
      {
        id: 'diploma',
        text: 'Diploma(Computer Engineering) M.Sc.Tech(Industrial Maths with Computer Application)',
      },
    ],
    coursesTaught: [
      {
        id: 'parallel-prog',
        text: 'Parallel programming',
      },
      {
        id: 'hpc',
        text: 'HPC',
      },
      {
        id: 'cluster-prog',
        text: 'Cluster programming',
      },
      {
        id: 'prog-massive',
        text: 'Programming Massive Parallel Processor',
      },
      {
        id: 'comp-org',
        text: 'Computer Organization',
      },
      {
        id: 'comp-arch',
        text: 'Computer Architecture',
      },
      {
        id: 'comp-des',
        text: 'Computer Design',
      },
      {
        id: 'adv-comp-arch',
        text: 'Advanced Computer Architecture',
      },
      {
        id: 'pds',
        text: 'Parallel and Distributed System',
      },
      {
        id: 'dist-comp',
        text: 'Distributed Processing/Computing',
      },
      {
        id: 'para-comp',
        text: 'Parallel Processing/Computing',
      },
      {
        id: 'ds',
        text: 'Data Structure',
      },
      {
        id: 'algo-des',
        text: 'Algorithm Design and Analysis',
      },
      {
        id: 'os',
        text: 'Operating system',
      },
      {
        id: 'comp-net',
        text: 'Computer Network',
      },
      {
        id: 'inter-tech',
        text: 'Internet Technology',
      },
      {
        id: 'ss',
        text: 'System software',
      },
      {
        id: 'micro-proc',
        text: 'Microprocessor',
      },
      {
        id: 'assembly',
        text: 'Assembly language programming',
      },
      // {
      //     id: 'dbms',
      //     text: 'Data Base Management System'
      // },
      {
        id: 'ai',
        text: 'AI',
      },
      {
        id: 'prolog',
        text: 'Prolog',
      },
      // {
      //     id: 'c',
      //     text: 'C programming'
      // },
      {
        id: 'visual-lang',
        text: 'Visual Language Programming',
      },
      {
        id: 'c',
        text: 'C',
      },
      {
        id: 'c++',
        text: 'C++',
      },
      {
        id: 'java',
        text: 'Java',
      },
      {
        id: 'VB',
        text: 'VB',
      },
      {
        id: 'embed-sys',
        text: 'Embedded System',
      },
      {
        id: 'soft-comp',
        text: 'Soft Computing Techniques',
      },
      {
        id: 'dbms',
        text: 'Data Base Management System',
      },
      {
        id: 'dist-db',
        text: 'Distributed Databases',
      },
    ],
  },
  {
    id: 'ndoja',
    name: 'Dr. Mohammad Najmund Doja',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '+919811380489',
    emails: ['mdoja2jmi.ac.in', 'mndoja@gmail.com', 'ndoja@yahoo.com'],
    description: [
      {
        id: 'curr',
        text: 'Dr. M.N. Doja is currently Professor in the Department of Computer Engineering, Faculty of Engineering and Technology, Jamia Millia Islamia, New Delhi-110025. He was the founder head of the Department of Computer Engineering for six years from its inception and has established the innovative and upcoming labs in the department. He started B.Tech. (Computer Engineering) and B.E. (Computer Engineering) as day and evening course respectively. He started Ph.D programme in the Department of Computer Engineering.',
      },
      {
        id: 'exp',
        text: 'He has more than two decades of academic, research, training and administrative experiences in the field of Computer Engineering and Information Technology.',
      },
      {
        id: 'edu-res',
        text: 'He received his B.Sc. (Engg), M.Tech. and Ph.D. degrees from B.I.T, I.I.T. Delhi and Jamia Millia Islamia, New Delhi respectively. His areas of research are Software Engineering, Networks, Security, Simulation, Operating System and Soft Computing. Prof. Doja is an active researcher. He has more than 100 publications in referred journals and conferences of international and national repute. He has been referee for a number of journals in the area of Computer Engineering and Information Technology. Several students have been awarded Ph.D under his able guidance and several students are working under his supervision. He is also author of a number of books in the area of Information Technology. He has successfully completed several projects including AICTE sponsored projects. He has chaired various sessions of various reputed conferences and delivered lectures on recent and burning topics in Computer Engineering and Information Technology as an invited speaker at a number of places across India and world.',
      },
      {
        id: 'memberships',
        text: 'Prof. Doja is a member of Academic Council, Board of Research Studies and Board of Studies of a number of universities including Ambedkar University Lucknow, NSIT New Delhi, A.M.U. Aligarh, Guru Gobind Singh Indraprastha University Delhi, NIT Jalandhar, Hamdard University New Delhi etc. He has been a member of a number of committee for various universities in various capacities. He has been expert member/member of various committee constituted by UGC and AICTE. He has also been associated with the affiliation work of various universities like Guru Gobind Singh Indraprastha University Delhi, M.D. University Rohtak, U.P. Technical University Lucknow and Uttrakhand Technical University.',
      },
      {
        id: 'prev-member',
        text: 'Prof. Doja has served as a member of Court, Executive Council and Academic Council of Jamia Millia Islamia. He has been Training and Placement Officer of the University and the Coordinator of University Central Library and Tata Infotech at Jamia Millia Islamia. He is also Co-ordinator of the Central Computing Facility of Faculty of Engineering and Technology at Jamia Millia Islamia. He was member of I.T. core group of Jamia Millia Islamia.',
      },
      {
        id: 'prev',
        text: 'Prof. Doja has been on the Purchase Committee of various universities like Jamia Millia Islamia, Indira Gandhi National Open university(IGNOU) and Guru Gobind Singh Indraprastha University Delhi.',
      },
      {
        id: 'examiner',
        text: 'He has been serving as examiners and paper setter of various courses like Ph.D., M.Tech., M.C.A., B.Tech. etc of various universities like Hyderabad Central University, Jawahar Lal Nehru University, Hamdard University, Guru Gobind Singh Indraprastha University , U.P. Technical University etc.',
      },
      {
        id: 'accomplishments',
        text: 'He has established CSI Student Chapter in Jamia Millia Islamia, New Delhi and since then he has been its Branch Co-ordinator for last six years.',
      },
    ],
    classesTaught: [],
    coursesTaught: [],
  },
  {
    id: 'tanv',
    name: 'Prof. Tanvir Ahmad',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '011-26980281',
    emails: ['tahmad2@jmi.ac.in', 'tanvir.jmi@gmail.com'],
    description: [
      {
        id: 'curr',
        text: 'Dr. Tanvir Ahmad is currently in the Department of Computer Engineering, Faculty of Engineering and Technology, Jamia Millia Islamia, New Delhi-110025. He has been involved with Department of Computer Engineering, Jamia Millia Islamia for over 13 years.',
      },
      {
        id: 'edu',
        text: 'He received his B.Sc. (Computer Sc.) from Bangalore University with First Class, M.Tech (I.T). from I.P. University, New Delhi in 2006 and Ph.D. on “Frequent and Sequential Pattern Mining and their Applications”, from Jamia Millia Islamia ,New Delhi in 2013.He has more than twenty years of academic, research, training and administrative experiences in the field of Computer Engineering. His areas of research are Text Mining, Graph Mining, Big Data Analytics, Natural Language Processing, Information Security.',
      },
      {
        id: 'research',
        text: 'Prof. Tanvir Ahmad is an active researcher. He has more than 100 citations in referred journals, more that 20 papers indexed in SCOPUS and more that 26 papers indexed in Google scholar. Several students have been awarded PhD under his able guidance and several students are working under his supervision. He is Reviewer for Springer Journal for Neural Computing and Application. He member of Advisory Group for Digital Locker system, National e-Governance Division, Ministry of I.T. and Communication, Govt. of India. He is also member of Expert Committee of National Board of Accreditation (NBA) and of Expert Committee for affiliation to colleges for M.Tech, B.Tech and MCA under G.G.S.I.P. University since 2010.',
      },
      {
        id: 'memberships',
        text: 'Prof Tanvir Ahmad is Hony. Additional Director of, FTK-Centre for Information Technology, for Website and MIS , Jamia Millia Islamia, New Delhi. He has worked as Head of Department of Computer Engineering from February, 2014 to February 2017. He is also a Member of Faculty Committee and Member of Board of Studies of Department of Computer Engineering, Jamia Millia Islamia. He was also the Chairman of Departmental Research Committee from Feb, 2014 to Feb, 2017 and President of Subject Association from Feb, 2014 to Feb, 2017. He is Chairman, of Syllabus Committee for drafting the course structure of M.Tech. in Computer Engineering. He is Teacher placement co-ordinator for Department of Computer Engineering from last 8 years. He is a Member of Jamia Teachers Association and Member of Sub-purchase committee of Department of Computer Engineering',
      },
    ],
    classesTaught: [
      {
        id: 'mtech',
        text: 'M.Tech. (Computer Engineering)',
      },
      {
        id: 'btech',
        text: 'B.Tech. (Computer Engineering)',
      },
      {
        id: 'be',
        text: 'B.E. (Computer Engineering)',
      },
      {
        id: 'mca',
        text: 'M.C.A.',
      },
      {
        id: 'msc-cs',
        text: 'M.Sc. (Computer Science)',
      },
      {
        id: 'msc-math',
        text: 'M.Sc. (Industrial Maths with Computer Application)',
      },
      {
        id: 'bca',
        text: 'B.C.A.',
      },
      {
        id: 'diploma',
        text: 'Diploma Engineering',
      },
    ],
    coursesTaught: [
      {
        id: 'ds',
        text: 'Data Structure',
      },
      {
        id: 'data-mining-analytics',
        text: 'Data Mining and Analyt0ics',
      },
      {
        id: 'data-mining',
        text: 'Data Mining',
      },
      {
        id: 'ss',
        text: 'System Software',
      },
      {
        id: 'os',
        text: 'Operating System',
      },
      {
        id: 'sys-des',
        text: 'System Analysis and Design',
      },
      {
        id: 'dbms',
        text: 'Database Management System',
      },
      {
        id: 'oop',
        text: 'Object Oriented Programming',
      },
      {
        id: 'web-tech',
        text: 'Web Technologies',
      },
    ],
  },
  {
    id: 'mamjad',
    name: 'Prof. Mohammad Amjad',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: 'not available',
    emails: ['mamjad@jmi.ac.in'],
    description: [
      {
        id: 'edu',
        text: 'Prof. Mohammad Amjad has obtained his B.Tech. in Computer Engineering from Aligarh Muslim University Aligarh, India in 1997 with first class. He obtained his M.Tech. (Information Technology) degree from IP University New Delhi, India in 2008 with first class and Ph.D. (Computer Engineering) degree from Jamia Millia Islamia in the year 2013, New Delhi India. He joined the Crescent computer Pvt. Ltd. New Delhi as a senior Network engineer in 1997. He was having the responsibilities to look after the Networks Design of Northern Indian Railway, Telecommunication of India Limited (TCIL) and Videsh Sanchar Nigam Limited (VSNL). Thereafter he joined as a Lecturer in the Department of Computer Science and Information Technology in MJP Rohilkhand University Bareilly U.P.',
      },
      {
        id: 'exp',
        text: 'In the year 2002 , he joined the Department of Computer Engineering University polytechnic, F/o Engineering and Technology Jamia Millia Islamia and then after he joined the Department of Computer Engineering F/o Engineering & Technology, Jamia Millia Islamia New Delhi in 2006 . He has the teaching experience of approximately 13 Years.',
      },
      {
        id: 'research',
        text: 'Dr. Amjad is Assistant Professor in the Department of Computer Engineering, Faculty of Engineering & Technology of Jamia Millia Islamia, New Delhi. Dr. Amjad has earned the Ph.D. degree for his research work in the field of Mobile Ad hoc Networks, where he investigated the clustering in MANET and Energy consumption in Wireless sensor Networks and designed a “Quality of Service Framework for Mobile Ad hoc Networks”. Dr. Amjad’s research work has been published in refereed International journals/ International conferences of repute. He contributed 15 research papers during his Ph.D. to the IEEE explore/ Springer/ International Journals in U.S.A/ International Conferences etc. He is actively involved in research and development activities in areas of MANET, WSN, Green Computing and Network Security systems. Dr. Amjad is having the life membership of ISTE and an expert lecturer on the topics related to Green cloud Computing, Wireless sensor Networks, Mobile Communication, Network security and Mobile Ad hoc Networks.',
      },
    ],
    classesTaught: [],
    coursesTaught: [],
  },
  {
    id: 'sarfm',
    name: 'Dr. Sarfaraz Massod',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '+919654774604',
    emails: ['smasood@jmi.ac.in', 'sarfarazmasood2002@yahoo.com'],
    description: [
      {
        id: 'edu',
        text: 'Dr. Sarfaraz Massod is currently Assistant Professor in the Department of Computer Engineering, Faculty of Engineering and Technology, Jamia Millia Islamia, New Delhi-110025. He is pursuing his Ph.D from Jamia Millia Islamia, New Delhi, had received his M.TECH in Information Technology from GGS Indraprastha University, New Delhi in 2012 and B.TECH in Computer Engineering from Jamia Millia Islamia, New Delhi in 2006. He has more than 7 years of teaching experiences in field of Computer Engineering.',
      },
      {
        id: 'research',
        text: 'Dr. Sarfaraz Massod has published a total of 16 research papers and journals. He has supervised a total of 30 B.Tech final year projects which includes topic from Soft computing using Neural Networks, User activity Tracker Module, Search Engines design, application on stenography etc.',
      },
      {
        id: 'interests',
        text: 'His area of Interest includes Artificial Neural Networks, Problem solving using Deep learning, Natural Language Processing, Compiler Design & Automata theory.',
      },
      {
        id: 'achievements',
        text: 'He has also delivered live lectures on National channel: VYAS on topic Introduction to compiler design series and had attended many workshop including IEEE International Conference GGSIPU , New Delhi held on 11th -13th march',
      },
      {
        id: 'memberships',
        text: 'He is also Member of Sports committee at faculty of Engineering and Technology, JMI and President for Badminton sports team of Jamia Millia Islamia University. He had supervised the project for CCTV surveillance of Jamia Millia Islamia',
      },
    ],
    classesTaught: [],
    coursesTaught: [
      {
        id: 'soft-comp',
        text: 'Soft Computing Techniques',
      },
      {
        id: 'automata',
        text: 'Automata Theory',
      },
      {
        id: 'lang-proc',
        text: 'Language Processor',
      },
      {
        id: 'ds',
        text: 'Data Structures',
      },
    ],
  },
  {
    id: 'mumahm',
    name: 'Dr. Mumtaz Ahmad',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '011-26980281, 9911669991',
    emails: ['ahmedmumtaz01@jmi.ac.in', 'mahmed1.jmi@gmail.com'],
    description: [
      {
        id: 'curr',
        text: 'Dr. Mumtaz Ahmed is currently Assistant Professor in the Department of Computer Engineering, Faculty of Engineering and Technology, Jamia Millia Islamia, New Delhi-110025.',
      },
      {
        id: 'exp',
        text: 'He has more than 9 years of teaching experiences in the field of Computer Engineering.',
      },
      {
        id: 'edu',
        text: 'He is pursuing his Ph.D from Jamia Millia Islamia, New Delhi, had received his M.TECH from Delhi College Of Engineering, New Delhi in 2013 and B.TECH from Jamia Millia Islamia in 2004.',
      },
      {
        id: 'research',
        text: 'Dr. Mumtaz Ahmed has published a total of 7 papers , 2 of which are in National/International Conferences and rest are in National/International Journals. He has also taken part in various Workshop/Conferences including ISTE workshop on Database Management System conducted by IIT-Bombay fomr 13th to 23rd Dec 2010',
      },
      {
        id: 'interests',
        text: 'His research interest includes Computer Networks, Artificial Intelligence and Operating Systems',
      },
    ],
    classesTaught: [],
    coursesTaught: [
      {
        id: 'disc-math',
        text: 'Discrete Mathematics',
      },
      {
        id: 'comp-net',
        text: 'Computer Networks',
      },
      {
        id: 'internet-fund',
        text: 'Internet Fundamentals',
      },
      {
        id: 'oops',
        text: 'OOPS',
      },
      {
        id: 'ai',
        text: 'Artificial Intelligence',
      },
    ],
  },
  {
    id: 'musheerah',
    name: 'Dr. Musheer Ahmad',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '+911126980281',
    emails: ['mahmad9@jmi.ac.in', 'musheer.cse@gmail.com'],
    description: [
      {
        id: 'curr',
        text: 'Dr. Musheer Ahmad is currently Assistant Professor in the Department of Computer Engineering, Faculty of Engineering and Technology, Jamia Millia Islamia, New Delhi-110025.',
      },
      {
        id: 'exp',
        text: 'He has more than 8 years of teaching experiences in the field of Computer Engineering.',
      },
      {
        id: 'edu',
        text: 'He received his M.TECH in Computer Science & Engineering from ZH College of Engineering and Technology, Aligarh Muslim University in 2004 and B.TECH in Computer Engineering from ZH College of Engineering and Technology, Aligarh Muslim University in 2004. His M.Tech Dissertation topic was “Design and implementation of LFSR based Data Encryption Circuit for Secure Communications”.',
      },
      {
        id: 'research',
        text: 'His research interest includes: ',
      },
      {
        id: 'res1',
        text: 'Chaos-based Security',
      },
      {
        id: 'res2',
        text: 'Multidisciplinary Cryptography',
      },
      {
        id: 'res3',
        text: 'Cryptanalysis',
      },
      {
        id: 'res4',
        text: 'Information Hiding',
      },
      {
        id: 'res5',
        text: 'Secure Sequence Design',
      },
      {
        id: 'res6',
        text: 'Hash Function Design',
      },
      {
        id: 'res7',
        text: 'Digital Image Processing',
      },
      {
        id: 'research',
        text: 'Dr. Musheer Ahmad has published a total of 10 papers in journals and 32 Conference papers. He is currently supervising 3 B.Tech projectsand had supervised a total of 23 B.Tech final year project and 9 M.Tech projects. He is Editorial Board member of International Journal of Chaos, Control, Modelling and Simulation(IJCCMS) and The Journal of Theoretical Physics and Cryptography(IJTPC). He is also Technical Program Committee member of over 16 International conferences and Journal and Reviewer of over 34 International conferences and Journal.',
      },
      {
        id: 'memberships',
        text: 'Dr. Musheer Ahmad has also Prepared Department’s Report for NAAC Accreditation and serving as Nodal faculty member for NAAC related activities. He is also member of Society of Digital Information and Wireless Communication(SDIWC), USA, Member of International Association of Computer Science and Information Technology (IACSIT), Singapore and Member of Institute of Doctors, Engineers and Scientists (IDES), India',
      },
    ],
    classesTaught: [
      {
        id: 'mtech',
        text: 'M.Tech (Computer Sc. & Engineering)',
      },
      {
        id: 'btech',
        text: 'B.Tech (Computer Engineering)',
      },
      {
        id: 'be',
        text: 'B.E (Computer Engineering)',
      },
      {
        id: 'msc-math',
        text: 'M.Sc. (Industrial Maths with Computer Applications)',
      },
    ],
    coursesTaught: [
      {
        id: 'micro-theory',
        text: 'Microprocessor Theory and Applications',
      },
      {
        id: 'disc-math',
        text: 'Discrete Mathematics',
      },
      {
        id: 'algo-des',
        text: 'Analysis and Design of Algorithms',
      },
      {
        id: 'soft-comp',
        text: 'Soft Computing Techniques',
      },
      {
        id: 'comp-arch',
        text: 'Computer Architecture',
      },
      {
        id: 'comp-graph',
        text: 'Computer Graphics',
      },
      {
        id: 'software-engg',
        text: 'Software Engineering',
      },
      {
        id: 'it',
        text: 'Information Technology',
      },
    ],
  },
  {
    id: 'zeeans',
    name: 'Mr. Mohammad Zeeshan Ansari',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '9999395201, +91-1126980281',
    emails: ['mzansari@jmi.ac.in', 'zeeshan.niec@gmail.com'],
    description: [
      {
        id: 'edu-res',
        text: 'Mohd Zeeshan Ansari is currently Assistant Professor at Department of Computer Engineering, Jamia Millia Islamia (A Central University), New Delhi. He received M.Tech in Computer Science and Engineering from Delhi Technological University, New Delhi and B.Tech in Computer Science and Engineering from Uttar Pradesh Technical University, Lucknow, Uttar Pradesh. He has more than nine years of teaching experience. His area of research interest is Code Mixing, Information Extraction and Retrieval, Text Mining, Natural Language Processing and Soft Computing Techniques. His field of Specialization is Information Extraction and Retrieval.',
      },
      {
        id: 'research',
        text: 'He has taken part in many workshops/seminars like summer special programme organized by UGC-Academic Staff College and GIAN Course on Fairness accuracy and transparency in Machine Learning. He is also member of various organizations like IDES, IRED, IAENG, IIJRC. He has also published two chapters in journals and books namely A simple and efficient S-box design using Fisher Yates shuffle technique and Enhancement of Fuzzy Rank Aggregation Technique.',
      },
      {
        id: 'memberships',
        text: 'He is also member of Departmental Committee for Curriculum Development of M.Tech, Computer Science and Engineering and NBA Coordinator of Dept of Computer Engineering. He is attendance coordinator of computer engineering department.',
      },
    ],
    classesTaught: [],
    coursesTaught: [
      {
        id: 'comp-org',
        text: 'Computer Organization(current, B.Tech)',
      },
      {
        id: 'algo-des',
        text: 'Analysis and Design of Algorithms',
      },
      {
        id: 'adv-algo',
        text: 'Advanced Algorithms and Current Trends in Computing',
      },
      {
        id: 'ds',
        text: 'Data Structures',
      },
      {
        id: 'comp-arch',
        text: 'Computer Architecture (previous B.Tech)',
      },
      {
        id: 'adv-comp-arch',
        text: 'Advanced Computer Architecture (previous M.Tech)',
      },
      {
        id: 'obj-ori-tech',
        text: 'Object Oriented Technology',
      },
      {
        id: 'elec-dev',
        text: 'Electronic Devices and Applications',
      },
      {
        id: 'foc',
        text: 'Fundamentals of Computing',
      },
      {
        id: 'data-min-lab',
        text: 'Data Mining Lab (current M.Tech)',
      },
      {
        id: 'lin-util-lab',
        text: 'Linux Utility Lab (current B.Tech)',
      },
      {
        id: 'adv-ds-lab',
        text: 'Advanced Data Structure Lab',
      },
      {
        id: 'ds-lab',
        text: 'Data Structure Lab',
      },
      {
        id: 'oop-lab',
        text: 'Object Oriented Programming Lab',
      },
      {
        id: 'dbms-lab',
        text: 'DBMS Lab',
      },
      {
        id: 'comp-graph-lab',
        text: 'Computer Graphics Lab',
      },
      {
        id: 'c-prog-lab',
        text: 'C Programming Lab (previous B.Tech)',
      },
      {
        id: 'ana-elec-lab',
        text: 'Analog Electronic Devices Lab',
      },
    ],
  },
  {
    id: 'faiyaah',
    name: 'Mr Faiyaz Ahmad',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '9999370237',
    emails: ['fahmad1@jmi.ac.in', 'ahmad.faiyaz@gmail.com'],
    description: [
      {
        id: 'curr',
        text: 'Mr. Faiyaz Ahmad is currently Assistant Professor in the Department of Computer Engineering, Faculty of Engineering and Technology, Jamia Millia Islamia, New Delhi-110025.',
      },
      {
        id: 'exp',
        text: 'He has more than 9 years of academic experiences in the field of Computer Engineering.',
      },
      {
        id: 'edu',
        text: 'He is pursuing his PhD in Computer Engineering from Department of Computer Engineering, Jamia Millia Islamia New Delhi. He did his M.Tech(IT) from Guru Gobind Singh Indraprastha University, Delhi with first division. And B.Tech. In Computer Engineering from Dr. Bhim Rao Ambedkar University (Formerly Known as Agra University) with Hons',
      },
      {
        id: 'interests',
        text: 'His area of interest includes Operating System, Image Processing, Big data, Data Mining and has published 14 journals till now and had taken part in various seminars and conferences',
      },
      {
        id: 'memberships',
        text: 'He is Member of Faculty Committee and board of studies, Faculty of Engineering & Technology Jamia Millia Islamia. Question Paper Setter/ Examiner of Various Courses of several University. He is Member of Jamia Teachers Association and of Jamia Cultural Committee',
      },
    ],
    classesTaught: [
      {
        id: 'btech-be',
        text: 'B.Tech./ B.E(Computer Engineering)',
      },
      {
        id: 'diploma',
        text: 'Diploma (Computer Engineering)',
      },
    ],
    coursesTaught: [
      {
        id: 'os',
        text: 'Operating System',
      },
      {
        id: 'comp-net',
        text: 'Computer Network',
      },
      {
        id: 'dbms',
        text: 'Database Management System',
      },
      {
        id: 'sig-sys',
        text: 'Signal & system',
      },
      {
        id: 'prog-lang',
        text: 'Programming Languages',
      },
      {
        id: 'comp-arch',
        text: 'Computer Architecture',
      },
      {
        id: 'ds',
        text: 'Data structure',
      },
    ],
  },
  {
    id: 'danishRiz',
    name: 'Mr. Danish Raza Rizvi',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '011-26980281 , 9910625221',
    emails: ['drizvi@jmi.ac.in', 'danish.jmi@gmail.com'],
    description: [
      {
        id: 'curr',
        text: 'Mr. Danish Raza Rizvi is currently Assistant Professor in the Department of Computer Engineering, Faculty of Engineering and Technology, Jamia Millia Islamia, New Delhi-110025.',
      },
      {
        id: 'exp',
        text: 'He has more than 10 years of teaching experiences in the field of Computer Engineering and Information Technology.',
      },
      {
        id: 'edu',
        text: 'He is currently doing his Ph.D from Jamia Millia Islamia, he received his M.TECH in Information Technology from USIT, GGS Indraprastha University, New Delhi in 2008 and B.TECH in Computer Science & Engineering from M.J.P. Rohilkhand University, Bareilly, U.P. in 2003. His M.TECH dissertation topic was Data Security and Authentication using Steganography.',
      },
      {
        id: 'research',
        text: 'Prof Danish Raza Rizvi has published a total of 7 papers in journals. He is currently supervising 5 B.Tech projects and 3 M.Tech projects and had supervised a total of 21 B.Tech final year project and 15 final year Diploma engineering projects (2004 – 2010)',
      },
      {
        id: 'interests',
        text: 'His research interest includes Data Security, Network Security and Steganography',
      },
      {
        id: 'tech-skills',
        text: 'Technical Skills: C, VC++, JAVA, HTML, VHDL, Intel 8085 / 8086, Microchip PIC 16F84/16F877 ,Linux Shell Scripting, Linux OS, Mac OS, & Windows Server 2008',
      },
      {
        id: 'activity',
        text: 'His department level activity includes Maintenance and supervising Apple iMac Lab, Client Server installation and maintenance for DBMS lab in Computer main lab. Maintenance and supervising Sun Microsystem (Linux) Lab. Installation, maintenance and supervising department level Wi-Fi Systems. Designing lab manuals for Linux Programming lab and C Programming Lab.',
      },
    ],
    classesTaught: [
      {
        id: 'btech-be',
        text: 'B.Tech./ B.E(Computer Engineering)',
      },
      {
        id: 'mtech',
        text: 'M.Tech(Computer Engineering)',
      },
      {
        id: 'diploma',
        text: 'Diploma (Computer Engineering)',
      },
    ],
    coursesTaught: [
      {
        id: 'foc',
        text: 'Fundamental of Computing',
      },
      {
        id: 'os',
        text: 'Operating System',
      },
      {
        id: 'comp-net',
        text: 'Computer Network',
      },
      {
        id: 'sys-soft',
        text: 'System Software',
      },
      {
        id: 'dbms',
        text: 'Database Management Systems',
      },
      {
        id: 'para-proc',
        text: 'Parallel & Distribued Processing',
      },
      {
        id: 'sys-net-admin',
        text: 'System & Network Administration',
      },
      {
        id: 'web-tech',
        text: 'Web Technologies',
      },
      {
        id: 'res-mgmt',
        text: 'Resource management of Computer Systems',
      },
      {
        id: 'sys-des',
        text: 'System Analysis & Design',
      },
    ],
  },
  {
    id: 'jlal',
    name: 'Mr. Jawahar Lal',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '011-26980281',
    emails: ['jlal@jmi.ac.in', 'jawahar.jmi@gmail.com'],
    description: [
      {
        id: 'curr',
        text: 'Jawahar Lal is currently Assistant Professor in the Department of Computer Engineering at Jamia Millia Islamia, New Delhi, India. He did his M.E. in Computer Technology & Application from Department of Computer Engineering, Delhi College of Engineering, Delhi and B.Tech in Computer Engineering from Kurukshetra University India( both with First Class).',
      },
      {
        id: 'prev',
        text: 'Earlier, he was a faculty member in Department of Computer Science & Engineering at B.M Institute of Engineering & Technology, (B.M.I.E.T, Sonepat) (2005) and Guru Tegh Bahadur Institute of Technology, Delhi (G.T.B.I.T, Delhi) (2006), before joining Jamia. He has more than 6 years of teaching experience in the field of Computer Engineering. His Industrial Software Training experience includes- Binary Semantics Ltd. Gurgaon. [2002] which is a client centric global software development company providing software development, research, web development, IT outsourcing services along with optimization and mathematical modeling solutions and consulting services. This Company has global operations across USA, Canada, Europe and India, where he had performed Software Testing on live Project named “Quality Control Management Information System (QCMIS)” during his training.',
      },
      {
        id: 'seminars',
        text: 'He has attended many Seminars and Conferences of national repute including-E-Security: Issues, Concerns and Preparedness at GGS IP University, Delhi (17-18 March 2006). Recent Trend in Software Testing at Delhi Technological University, Delhi (September 2010) and many',
      },
      {
        id: 'dev-prog',
        text: 'Professional Development Programs Conducted by ACCENTURE.',
      },
      {
        id: 'membership',
        text: 'He is a Member of Computer Society of India (CSI).',
      },
    ],
    classesTaught: [],
    coursesTaught: [
      {
        id: 'soft-engg',
        text: 'Software Engineering',
      },
      {
        id: 'ai',
        text: 'Artificial Intelligence',
      },
      {
        id: 'os',
        text: 'Operating System-II',
      },
      {
        id: 'internet-fund',
        text: 'Internet Fundamental',
      },
      {
        id: 'comp-net',
        text: 'Computer Network',
      },
      {
        id: 'comp-arch-org',
        text: 'Computer Architecture & Organization',
      },
      {
        id: 'dlt',
        text: 'Digital Logic Theory',
      },
      {
        id: 'prog-lang',
        text: 'Java Programming, C, C++ Programming.',
      },
    ],
  },
  {
    id: 'shshza',
    name: 'Dr. Shahzad Alam',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '+919818538198',
    emails: ['salam7@jmi.ac.in', 'shahzad5alam@gmail.com'],
    description: [
      {
        id: 'edu-research',
        text: 'Dr. Shahzad Alam is Assistant Professor in the Department of Computer Engineering, Jamia Millia Islamia (A Central University), New Delhi. He has done Ph.D from the Department of Computer Engineering, Jamia Millia Islamia. He received M. Tech degree from the Department of Computer Engineering, Z.H. College of Engineering & Technology, Aligarh Muslim University, Aligarh, India in 2010 and B. Tech degree in Computer Science and Engineering from Uttar Pradesh Technical University, Lucknow, Uttar Pradesh in 2007. He also worked as a Software Developer in the ODO Software Solution Pvt. Ltd., Noida in the year 2007. He qualified GATE-2007, GATE-2015, GATE-2016 and UGC NET-2015 in Computer Sc. & Engg discipline. He has more than 7 years of teaching and research experience. He has published many research articles and presented his work in various international conferences. His area of research interest is Image processing, information Security, Cryptography and Soft Computing Techniques.',
      },
    ],
    classesTaught: [],
    coursesTaught: [
      {
        id: 'ds',
        text: 'Data Structure',
      },
      {
        id: 'os',
        text: 'Operating System',
      },
      {
        id: 'algo-des',
        text: 'Analysis and Design of Algorithm',
      },
      {
        id: 'dbms',
        text: 'Data Base Management System',
      },
      {
        id: 'comp-org',
        text: 'Computer Organization',
      },
      {
        id: 'comp-arch',
        text: 'Computer Architecture',
      },
      {
        id: 'ai',
        text: 'Artificial Intelligence',
      },
      {
        id: 'comp-net',
        text: 'Computer Network',
      },
      {
        id: 'foc',
        text: 'Fundamental of Computer',
      },
      {
        id: 'c-prog',
        text: 'Programming in C',
      },
      {
        id: 'mob-comp',
        text: 'Mobile Computing',
      },
    ],
  },
  {
    id: 'shamah',
    name: 'Mr. Shamim Ahmad',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '',
    emails: ['shamim.ahmad.jmi@gmail.com'],
    description: [],
    classesTaught: [],
    coursesTaught: [],
  },
  {
    id: 'hnnman',
    name: 'Mr. Hannan Mansoor',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '',
    emails: ['hannan.mansoor.jmi@gmail.com'],
    description: [],
    classesTaught: [],
    coursesTaught: [],
  },
  {
    id: 'wasahm',
    name: 'Dr. Waseem Ahmed',
    department: 'Department of Computer Engineering, Jamia Millia Islamia',
    address: 'New Delhi, Delhi-110025 India',
    phone: '',
    emails: ['waseem.ahmed86@gmail.com'],
    description: [],
    classesTaught: [],
    coursesTaught: [],
  },
]
