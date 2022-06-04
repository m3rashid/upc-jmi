export interface IItem {
  id: string
  title: string
  body: string
}

export interface IString {
  id: string
  text: string
}

export interface ICourse {
  title: string
  intake: number
  courseFee: string
  duration: string
  type: string
  intro: string
  eligibility?: IString[]
  admProcess: IString[]
  careerProspects: IString[]
  programEducationalObjectives?: IItem[]
  programSpecificOutcomes?: IItem[]
}
