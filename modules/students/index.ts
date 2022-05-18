export {
  addBtechStudent,
  editBtechStudent,
  deleteBtechStudent,
} from './controllers/btech'

export {
  addMtechStudent,
  editMtechStudent,
  deleteMtechStudent,
} from './controllers/mtech'

export {
  addPhdStudent,
  editPhdStudent,
  deletePhdStudent,
} from './controllers/phd'

import BtechStudent from './models/btech'
import MtechStudent from './models/mtech'
import PhdStudent from './models/phd'

export { IAchievement, IBtechStudent } from './models/btech'
export { IMtechStudent } from './models/mtech'
export { IPhdStudent } from './models/phd'

export { BtechStudent, MtechStudent, PhdStudent }
