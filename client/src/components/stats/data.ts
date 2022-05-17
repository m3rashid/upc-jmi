import { Coin, Discount2, Receipt2, UserPlus } from 'tabler-icons-react'

export const icons = {
  user: UserPlus,
  discount: Discount2,
  receipt: Receipt2,
  coin: Coin,
}

export interface IStatsGrid {
  id: string
  title: string
  icon: keyof typeof icons
  value: string
  diff: number
}

export const data: IStatsGrid[] = [
  {
    id: 'placementStat1',
    title: 'Placement 2017 Batch',
    icon: 'user',
    value: '20',
    diff: 9,
  },
  {
    id: 'placementStat2',
    title: 'Placement 2017 Batch',
    icon: 'user',
    value: '20',
    diff: 9,
  },
  {
    id: 'placementStat3',
    title: 'Placement 2017 Batch',
    icon: 'user',
    value: '20',
    diff: 9,
  },
  {
    id: 'placementStat4',
    title: 'Placement 2017 Batch',
    icon: 'user',
    value: '20',
    diff: 9,
  },
]
