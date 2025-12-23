import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import { Home } from './pages/Home.jsx'
import { Rooms } from './pages/Rooms.jsx'
import { Admin } from './pages/Admin.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[ 
      {path:'/',element:<Home/>},
      {path:'/rooms', element:<Rooms/>},
      {path:'/admin', element:<Admin/>}
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
