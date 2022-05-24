export { router as btechRouter } from './controllers/btech'
export { router as mtechRouter } from './controllers/mtech'
export { router as phdRouter } from './controllers/phd'

import BtechStudent from './models/btech'
import MtechStudent from './models/mtech'
import PhdStudent from './models/phd'

export { IAchievement, IBtechStudent } from './models/btech'
export { IMtechStudent } from './models/mtech'
export { IPhdStudent } from './models/phd'

export { BtechStudent, MtechStudent, PhdStudent }
