import React, { useState } from "react";
import "./AddRooms.css";
import axios from 'axios'


export const AddRooms = () => {
  const [room, setRoom] = useState({
    name: "",
    type: "",
    price: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRoom({
      ...room,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const newRoom = {
      id: Date.now(),
      ...room,
      price: Number(room.price),
      available: room.available === "true" || room.available === true
    };

    const {data} = await axios.post(`http://localhost:5000/api/admin/add-room`,newRoom)
    
    console.log(data)

    setRoom({
      name: "",
      type: "",
      price: "",
      available: true
    });
  };

  return (
  <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>

    <div className="addroom-container">
      <h2>Add New Room</h2>

      <form className="addroom-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Room Name"
          value={room.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="type"
          placeholder="Room Type (lux, deluxe etc)"
          value={room.type}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={room.price}
          onChange={handleChange}
          required
        />

        <select
          name="available"
          value={room.available}
          onChange={handleChange}
        >
          <option value={true}>Available</option>
          <option value={false}>Not Available</option>
        </select>

        <button type="submit">Add Room</button>
      </form>
    </div>
  </div>
  );
};
