import { ICourse } from './'

export const beData: ICourse = {
  title: 'Bachelor of Engineering (B.E.)',
  intake: 75,
  courseFee: '38,190/year',
  duration: '4 Years',
  type: 'Part Time',
  intro:
    'B.E. is a four-year part-time (evening) degree programme tailored for government officials and industry professionals looking for professional advancement.',
  eligibility: [
    {
      id: 'beEl1',
      text: 'Four-year Diploma either in Computer Engineering or in Electronics & Communication Engineering or in a relevant branch is required together with at least two years of professional experience after Diploma. Diploma holders from University Polytechnic, Jamia Millia Islamia securing 70% marks or more are also eligible to appear in the Entrance Test without professional experience.',
    },
    {
      id: 'beEl2',
      text: 'The experience shall be reckoned from the date of declaration of result/date of issue of mark-sheet of qualifying examination or the date of the beginning of professional engagement (whichever is later) till the last date of submission of Application Form. Documentary evidence of declaration of result is required at the time of admission.',
    },
  ],
  admProcess: [
    {
      id: 'beAdmProcess1',
      text: 'Admissions to the B.E. programme is done on the basis of merit determined by an entrance test conducted by JMI. The University shall notify the list of finally selected candidates on its website.',
    },
    {
      id: 'beAdmProcess2',
      text: 'The tentative schedule for the Entrance Test is November every year.',
    },
    {
      id: 'beAdmProcess3',
      text: 'Candidates are advised to check www.jmi.ac.in and www.jmicoe.in for regular updates on B.E. admissions.',
    },
  ],
  careerProspects: [
    {
      id: 'beCareerPros1',
      text: 'A highly successful programme of the Department of Computer Engineering, B.E.(CoE) has proven itself by successfully attaining all its course objectives.',
    },
    {
      id: 'beCareerPros2',
      text: 'Student Pass-outs of the programme have time and again appreciated the course curriculum and how it has helped them in achieving a better grip in the industry.',
    },
  ],
}
