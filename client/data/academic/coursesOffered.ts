export interface ICourseList {
  id: string
  shortName: IShortName
  title: string
  body: string
}

export type IShortName = 'btech' | 'be' | 'mtech' | 'phd'

export const coursesList: ICourseList[] = [
  {
    id: 'course1',
    shortName: 'btech',
    title: 'Bachelor of Technology(B.Tech)',
    body: 'B.Tech is a four year full time professional degree programme designed to cater to fresh, promising minds aspiring for a career in the hardware, software and IT industry.',
  },
  {
    id: 'course2',
    shortName: 'be',
    title: 'Bachelor of Engineering(B.E)',
    body: 'B.E. is a four year part time (evening) degree programme tailored for government officials and industry professionals looking for professional advancement.',
  },
  {
    id: 'course3',
    shortName: 'mtech',
    title: 'Master of Technology(M.Tech)',
    body: 'M.Tech is a two year full time professional cum research oriented degree programme to prepare the students for advanced study and/or prospective research in the field of advanced Computer Science, Engineering and Tech.',
  },
  {
    id: 'course4',
    shortName: 'phd',
    title: 'Ph.D. in Computer Engineering',
    body: 'Ph.D. in Computer Engineering is the doctoral degree programme tailored for academics cum research prospective candidates.They are offered the opportunity to pursue theoretical and pragmatic research focussed on a topic of their interest.',
  },
]
