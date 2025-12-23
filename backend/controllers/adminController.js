const db = require("../db");



const addRoomController = (req, res)=>{

    const {id, name, type, price, available} = req.body;
    console.log(req.body)
    const sql = "INSERT INTO rooms (id, name, type, price, available) VALUES (?, ?, ?, ?, ?)";

    db.query(sql, [id, name, type, price, available], (err, result) => {
        if (err) return res.json(err);
        res.json({ message: "Room is Added", id: result.insertId });
    });
}

const getBookingsController = (req, res)=>{

    const sql = "SELECT * FROM bookings";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        res.json(result);
  }); 
}

module.exports = {addRoomController, getBookingsController};