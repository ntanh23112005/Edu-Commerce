import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import 'antd/dist/antd.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import { ToastContainer } from 'react-toastify'
import FavoritesPage from './pages/FavoritePage.jsx'
import HistoryPage from './pages/HistoryPage.jsx'
import { FavoritesProvider } from './context/FavoritesContext.jsx'
import { ModalProvider } from './context/ModalContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/favorites',
        element: <FavoritesPage />
      },
      {
        path: '/histories',
        element: <HistoryPage />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <FavoritesProvider>
    <ModalProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={1000} />
    </ModalProvider>
  </FavoritesProvider>
  // </StrictMode>,
)
