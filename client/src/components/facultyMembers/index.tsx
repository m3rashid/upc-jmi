import React from 'react'

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

interface IProps {}

const FacultyMemberDetails: React.FC<IProps> = () => {
  return (
    <>
      <div>FacultyMemberDetails</div>
    </>
  )
}

export default FacultyMemberDetails
