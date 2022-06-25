export type IBatch =
  | '2018-2022'
  | '2019-2023'
  | '2020-2024'
  | '2021-2025'
  | '2022-2026'

export const batchOptions: IBatch[] = [
  '2018-2022',
  '2019-2023',
  '2020-2024',
  '2021-2025',
  '2022-2026',
]

export type ICourse = 'B. Tech' | 'M. Tech' | 'Ph. D'

export const courseOptions: ICourse[] = ['B. Tech', 'M. Tech', 'Ph. D']
