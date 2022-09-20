import { FC } from 'react'
import { MainNavbar, RoomList } from '../components'

export const Homepage: FC = () => {
  return (
    <div>
      <MainNavbar />
      <RoomList />
    </div>
  )
}
