import { type Dispatch, type SetStateAction } from 'react'

export interface HomeHeroPfpProps {
  drag: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  setDrag: Dispatch<SetStateAction<HomeHeroPfpProps['drag']>>
}
