1. Create database in mysql -> hotel_mgt

2. Create table -> create table rooms(id bigint primary key, name varchar(20), type varchar(10), price int, available boolean);

3. Create another table -> create table bookings(id bigint primary key, guestName varchar(20), email varchar(25), guests int, roomId bigint,
roomName varchar(10), roomType varchar(10), checkIn date, checkOut date);

4. In backend folder -> db.js file set host, user, password, database

5. run npm install in both backend and frontend folder 

6. run npm run dev commond in backend and frontend folder