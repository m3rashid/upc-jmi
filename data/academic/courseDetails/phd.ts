import { IString } from 'data/academic/courseDetails'

export interface IPhd {
  title: string
  intro: IString[]
  fellowships: string
  admProcess: IString[]
  eligibility: IString[]
  careerProspects: IString[]
}

export const phdData: IPhd = {
  title: 'Ph.D. in Computer Engineering',
  intro: [
    {
      id: 'phdIntro1',
      text: 'Ph.D. in Computer Engineering is the doctoral degree programme tailored for academics cum research focused candidates. They are offered the opportunity to pursue theoretical and pragmatic research focussed on a topic of their interest.',
    },
    {
      id: 'phdIntro2',
      text: 'The doctoral programme of the Department of Computer Engineering, Ph.D. offers a plethora of possibilities for research-oriented students. Providing world-class facilities and a conducive environment to our scholars has been a priority for us, many of whom have published results in journals of national and international repute.',
    },
  ],
  fellowships: 'Fellowships are provided as per the rules prescribed by UGC.',
  admProcess: [
    {
      id: 'phdAdmissionPr1',
      text: 'The University will separately notify for admission to Ph.D. Programs, in Nov-Dec every year. The information including available seats, detailed admission guidelines, entrance test syllabi, application form, etc. are made available on the University website www.jmi.ac.in',
    },
    {
      id: 'phdAdmissionPr2',
      text: 'All the candidates wishful of admission to the PhD programme shall be called for an interview as per the schedule notified by the Department.',
    },
  ],
  eligibility: [
    {
      id: 'phdEligible1',
      text: 'The candidate must have obtained at least a Second Class Masters Degree with not less than 55% of marks of a University or a Degree recognized by the University as its equivalent in Computer Science or other engineering disciplines.',
    },
    {
      id: 'phdEligible2',
      text: 'The Department offers the possibility for a certain category of students to supersede the requirement of appearing and qualifying the Entrance Test. Please refer to the Information Brochure given below for further details.',
    },
  ],
  careerProspects: [
    {
      id: 'phdCareer1',
      text: 'The burgeoning demand in industry and academia for quality researchers in India and abroad has opened an avenue of lucrative and satisfying career paths for doctoral students. A Ph.D.. graduate commands a significantly higher salary and respect in the industry, compared to their non-PhD counterparts.',
    },
    {
      id: 'phdCareer2',
      text: 'Academia still remains the most preferred career option for PhDs, with R&D and start-ups following close behind.',
    },
  ],
}
