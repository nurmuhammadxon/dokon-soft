import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// layouts
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App