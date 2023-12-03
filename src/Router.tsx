import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import UploadPage from './pages/UploadForm';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/upload',
    element: <UploadPage/>
  },
  // {
  //   path: '/login',
  //   element: <LoginPage/>
  // },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
