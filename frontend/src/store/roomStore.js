import {createSlice, configureStore} from "@reduxjs/toolkit"

const roomsSlice = createSlice({
    name: "rooms",
    initialState:[],
    reducers:{
        storeRooms:(state, action)=>{
            return action.payload
        }
    }
})

const bookingsSlice = createSlice({
    name: "bookings",
    initialState:[],
    reducers:{
        storeBookings:(state, action)=>{
            return action.payload
        }
    }
})

const store = configureStore({
    reducer:{
        rooms: roomsSlice.reducer,
        bookings: bookingsSlice.reducer
    }
})

export default store
export const {storeRooms} = roomsSlice.actions
export const {storeBookings} = bookingsSlice.actions