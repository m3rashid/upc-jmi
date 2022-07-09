import { ICourse } from 'data/academic/courseDetails'

export const mtechData: ICourse = {
  title: 'Master of Technology (M.Tech)',
  intake: 20,
  courseFee: '13,050/year',
  duration: '4 Semester(2 Years)',
  type: 'Full Time',
  intro:
    'M.Tech is a two-year full-time professional cum researchoriented degree programme to prepare the students for advanced study and/or prospective research in the field of advanced Computer Engineering and Science/Technology.',
  admProcess: [
    {
      id: 'mtechAdmPros1',
      text: 'Jamia Millia Islamia conducts a separate entrance test for M.Tech admissions. Admissions are done solely on the basis of this entrance test.',
    },
    {
      id: 'mtechAdmPros2',
      text: 'Forms are tentatively made available in March-April.',
    },
    {
      id: 'mtechAdmPros3',
      text: 'Interested candidates are advised to check www.jmi.ac.in for M.Tech admission updates.',
    },
  ],
  careerProspects: [
    {
      id: 'mtechCarProspects1',
      text: 'The programme bears testimony to an excellent placement track record, with our students bagging offers from the top companies in the industry. The current placement season has seen the Exchanger companies hiring at an annual package of close to a million.',
    },
    {
      id: 'mtechCarProspects2',
      text: 'The department also boasts of state-of-the-art laboratory and infrastructure facilities for its students, thereby stimulating an atmosphere of research among them.',
    },
  ],
}
