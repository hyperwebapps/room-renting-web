import { createBrowserRouter } from 'react-router-dom'
import { Homepage, Login, Room } from './routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/rooms',
    children: [
      {
        path: ':roomId',
        element: <Room />,
      },
    ],
  },
])
