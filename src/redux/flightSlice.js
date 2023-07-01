import {createSlice, 
    createAsyncThunk} 
    from '@reduxjs/toolkit';
import axios from 'axios';
import { options } from './constans';

/*
! thunk fonksiyonu:
    Görevi: 
    1-) Api'den uçuş verisini çekmek.
    2-) Bu verileri store a aktarmak
*/

export const getFlightData = createAsyncThunk("flights/getFlights", async()=>{
    // asenkron işlemler
    const res = await axios.request(options);

    const newData = res.data.aircraft.map((plane)=>({
        id: plane[0],
        code: plane[1],
        lat: plane[2],
        lng: plane[3],
    }))


    

    //return olan veri store a aktarılır
    return newData;
})

const initialState = {
    flights: [],
    flightsLoading: true,
    isError: false,
};

export const flightSlice = createSlice ({
    name: "flightSlice",
    initialState,

    //extra reducer sayesinde bir thunk fonsiyonunun aşama aşama
    // storu nasıl etkilediğini gösteriyoruz
    extraReducers:{
        [getFlightData.pending]:(state,action)=>{
            state.flightsLoading=true
        },
        [getFlightData.fulfilled]: (state,action)=>{
            state.flights=action.payload
            state.flightsLoading=false
        },
        [getFlightData.rejected]: (state,action)=>{
            state.isError = true;
            state.flightsLoading = false;
        },

    }


})

/*
thunk aksiyonları çalıştırınca stora veriyi 
aktarmadan hemen önce işlem yapmaya yarar.
*/