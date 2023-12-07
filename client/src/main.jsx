import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: App(),
      },
    ],

  }
]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
