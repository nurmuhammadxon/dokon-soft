import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// layouts
import MainLayout from './layouts/MainLayout';
// pages
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import PasswordReset from './pages/auth/PasswordReset';
import PasswordResetRequest from './pages/auth/PasswordResetRequest';
import VerifyEmail from './pages/auth/VerifyEmail';
// route guards
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/login',
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      )
    },
    {
      path: '/signup',
      element: (
        <PublicRoute>
          <Register />
        </PublicRoute>
      )
    },
    {
      path: '/app',
      element: (
        <PrivateRoute>
          <MainLayout />
        </PrivateRoute>
      ),
      children: [
        {
          index: true,
          element: <HomePage />
        },
      ]
    },
    {
      path: '/reset-password',
      element: (
        <PublicRoute>
          <PasswordReset />
        </PublicRoute>
      )
    },
    {
      path: '/password-reset-request',
      element: (
        <PublicRoute>
          <PasswordResetRequest />
        </PublicRoute>
      )
    },
    {
      path: '/verify-email',
      element: (
        <PublicRoute>
          <VerifyEmail />
        </PublicRoute>
      )
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
