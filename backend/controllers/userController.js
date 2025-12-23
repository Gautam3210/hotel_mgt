const db = require("../db");

db

const fetchRoomController = (req, res)=>{

    const sql = "SELECT * FROM rooms";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        res.json(result);
  }); 
}

const bookingController = (req, res)=>{

    const {id, guestName, email, guests, roomId, roomName, roomType, checkIn, checkOut} = req.body;
    console.log(req.body)
    const sql = "INSERT INTO bookings (id, guestName, email, guests, roomId, roomName, roomType, checkIn, checkOut) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [id, guestName, email, guests, roomId, roomName, roomType, checkIn, checkOut], (err, result) => {
        if (err) return res.json(err);
        res.json({ message: "Room is Added", id: result.insertId });
    });
}

module.exports = {fetchRoomController, bookingController};