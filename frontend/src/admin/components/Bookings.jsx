import React, { useEffect } from 'react'
import { AdminRooms } from './AdminRooms'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { storeBookings } from '../../store/roomStore'

// const rooms = [
// {
//   id: 3,
//   name: "C",
//   type: "delux",
//   price: 200,
//   available: true,
// },
// {
//   id: 4,
//   name: "D",
//   type: "lux",
//   price: 200,
//   available: true,
// },
// ]



export const Bookings = () => {
  const dispatch = useDispatch()
  const rooms = useSelector((state)=> state.bookings)

  useEffect(()=>{
    const fetchBookings = async()=>{
      const {data} = await axios.get("http://localhost:5000/api/admin/fetch-bookings")
      console.log(data)
      dispatch(storeBookings(data))
    }
    fetchBookings();
  },[])

  return (
    <div className="rooms-container">
      {rooms.map((r) => <AdminRooms key={r.id} room={r}/>)}
    </div>
  )
}
