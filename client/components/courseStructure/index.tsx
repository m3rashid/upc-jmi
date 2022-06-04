import React from 'react'

import {
  bTechSem1,
  bTechSem2,
  bTechSem3,
  bTechSem4,
  bTechSem5,
  bTechSem6,
  bTechSem7,
  bTechSem8,
} from '../../data/academic/courseStructure/btech'
import {
  mtechSem1,
  mtechSem2,
  mtechSem3,
  mtechSem4,
} from '../../data/academic/courseStructure/mtech'
import {
  beYear1,
  beYear2,
  beYear3,
  beYear4,
} from '../../data/academic/courseStructure/be'
import Table from './defaultTable'
import BeTable from './beTable'

export type ICourse = 'B. Tech' | 'M. Tech' | 'B.E.'

interface IProps {
  course: ICourse
  semYear: string
}

const AllCourseStructure: React.FC<IProps> = ({ course, semYear }) => {
  const num = semYear.split(' ')[1]

  return (
    <>
      {course === 'B. Tech' && num === '1' && <Table data={bTechSem1} />}
      {course === 'B. Tech' && num === '2' && <Table data={bTechSem2} />}
      {course === 'B. Tech' && num === '3' && <Table data={bTechSem3} />}
      {course === 'B. Tech' && num === '4' && <Table data={bTechSem4} />}
      {course === 'B. Tech' && num === '5' && <Table data={bTechSem5} />}
      {course === 'B. Tech' && num === '6' && <Table data={bTechSem6} />}
      {course === 'B. Tech' && num === '7' && <Table data={bTechSem7} />}
      {course === 'B. Tech' && num === '8' && <Table data={bTechSem8} />}

      {course === 'M. Tech' && num === '1' && <Table data={mtechSem1} />}
      {course === 'M. Tech' && num === '2' && <Table data={mtechSem2} />}
      {course === 'M. Tech' && num === '3' && <Table data={mtechSem3} />}
      {course === 'M. Tech' && num === '4' && <Table data={mtechSem4} />}

      {course === 'B.E.' && num === '1' && <BeTable data={beYear1} />}
      {course === 'B.E.' && num === '2' && <BeTable data={beYear2} />}
      {course === 'B.E.' && num === '3' && <BeTable data={beYear3} />}
      {course === 'B.E.' && num === '4' && <BeTable data={beYear4} />}
    </>
  )
}

export default AllCourseStructure
