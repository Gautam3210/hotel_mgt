import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'
import { Home } from './pages/Home.jsx'
import { Rooms } from './pages/Rooms.jsx'
import {AddRooms} from "./admin/components/AddRooms.jsx"
import { Admin } from './admin/Admin.jsx'
import { BookingPage } from './pages/BookingPage.jsx'
import { Bookings } from './admin/components/Bookings.jsx'
import store from './store/roomStore.js'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[ 
      {path:'/',element:<Home/>},
      {path:'/rooms', element:<Rooms/>},
      {path:'/booking-page/:id', element: <BookingPage/>},
    ]
    
  },
  {
    path:'/admin',
    element:<Admin/>,
    children:[
     { path:'/admin', element:<Bookings/>},
     { path:'/admin/rooms', element:<AddRooms/>}
    ]
   
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
