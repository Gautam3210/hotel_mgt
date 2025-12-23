import React from 'react'
import "./AdminRooms.css"

export const AdminRooms = ({room}) => {


  const handleRemove = ()=>{

  }
  return (
    <div className="room-card">
      <h2 className="room-name">{room.roomName}</h2>
      <p className="room-type">Type: {room.roomType}</p>

      <hr />

      <p><strong>Guest:</strong> {room.guestName}</p>
      <p><strong>Email:</strong> {room.email}</p>
      <p><strong>Guests:</strong> {room.guests}</p>

      <p><strong>Check-In:</strong> {(room.checkIn).toString().slice(0,10)}</p>
      <p><strong>Check-Out:</strong> {(room.checkOut).toString().slice(0,10)}</p>

      <hr />

      <button className="remove-btn">
        Cancel 
      </button>
    </div>
  );
}
