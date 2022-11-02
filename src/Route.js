import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddUsrs from './pages/AddUsrs'
import Home from './pages/Home'
import ShowUsers from './pages/ShowUsers'

const Route = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        }, {
            path: '/addUsers',
            element: <AddUsrs />,
        }, {
            path: '/showUsers',
            element: <ShowUsers />,
            loader: () => fetch('http://localhost:5000/users')
        }
    ])

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default Route