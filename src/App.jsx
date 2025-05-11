import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// layouts
import MainLayout from './layouts/MainLayout'
// pages
import HomePage from './pages/HomePage'
// pages => auth
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import PasswordReset from './pages/auth/PasswordReset'
import PasswordResetRequest from './pages/auth/PasswordResetRequest'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
      ]
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'signup',
      element: <Register />
    },
    {
      path: 'password-reset',
      element: <PasswordReset />
    },
    {
      path: 'password-reset-request',
      element: <PasswordResetRequest />
    }
  ])

  return <RouterProvider router={router} />
}

export default App