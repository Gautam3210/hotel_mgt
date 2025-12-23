const mysql = require('mysql2')

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "gautam@3210",
    database: "hotel_mgt"
})

db.connect((err)=>{ 
    if(err){
        console.log("connection failed")
    }else{
        console.log("connection successfully")
    }
})

module.exports = db