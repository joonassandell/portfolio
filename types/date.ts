type FourDigitYear = `${number}${number}${number}${number}`
type TwoDigitMonth = `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | `1${0 | 1 | 2}`
type TwoDigitDay =
  | `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  | `${1 | 2}${number}`
  | `30`
  | `31`

export type DateString = `${FourDigitYear}-${TwoDigitMonth}-${TwoDigitDay}`
