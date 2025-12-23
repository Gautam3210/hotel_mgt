import React from "react";
import "./Room.css";
import { useNavigate } from "react-router-dom";


export const Room = ({ room }) => {

    const navigate = useNavigate()
    
    const handleBookNow = (id)=>{
        navigate(`/booking-page/${id}?name=${room.name}&room=${room.type}`)
    }

  return (
    <div className="room-card">
      <h2 className="room-name">{room.name}</h2>
      <p className="room-type">Type: {room.type}</p>
      <p className="room-price">Price: ₹{room.price}</p>
      <p className={room.available ? "available" : "not-available"}>
        {room.available ? "Available" : "Not Available"}
      </p>
      <button className="book-btn"  onClick={()=>{handleBookNow(room.id)}}>
        Book Now
      </button>
    </div>
  );
};

