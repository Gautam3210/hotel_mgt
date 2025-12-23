import React, { useEffect, useState } from 'react'
import { Room } from '../components/Room'
import "./Rooms.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { storeRooms } from '../store/roomStore'



export const Rooms = () => {
  const dispatch = useDispatch()
  const rooms = useSelector((state) => state.rooms)
  let [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    const roomsFetch = async()=>{
      const {data} = await axios.get("http://localhost:5000/api/user/fetch-rooms")
      console.log(rooms)
      dispatch(storeRooms(data))
    }

    roomsFetch()
    
  }, [])
  return (
    <div className="rooms-container">
      {rooms.map((r) => <Room key={r.id} room={r}/>)}
    </div>
  )
}
