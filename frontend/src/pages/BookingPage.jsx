import React, { useState } from "react";
import "./BookingPage.css";
import axios from "axios"
import { useParams, useSearchParams } from "react-router-dom";

export const BookingPage = () => {

  const {id} = useParams()
  const [searchParams] = useSearchParams()

  const name = searchParams.get('name')
  const type = searchParams.get('room')

  const [formData, setFormData] = useState({
    id: Date.now(),
    guestName: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    const finalData = {
      ...formData,
      roomId:Number(id),
      roomName: name,
      roomType:type
    }
    console.log("Booking Details:", finalData);
    
    const result = await axios.post("http://localhost:5000/api/user/bookings",finalData)
    console.log(result)
    alert("Booking Successful!");
  };

  return (
    <div className="booking-container">
      <div className="booking-box">
        <h2 className="booking-title">Room Booking</h2>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="guestName"
              placeholder="Enter your name"
              value={formData.guestName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Check-In Date</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Check-Out Date</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>No. of Guests</label>
            <input
              type="number"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              required
            />
          </div>

          <button className="submit-btn" type="submit">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

