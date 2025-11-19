import { createSlice } from "@reduxjs/toolkit"

const bagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addToBag: (state, action) => {
            //jb state mai hi change/modify kr rahy hain toh return ki zaroort nahi hai 
            state.push(action.payload);
        },
        removeFromBag: (state, action) => {
            //use return whennot modifying state
            return state.filter(itemId => itemId !== action.payload);
        },

    }
})

export const bagActions = bagSlice.actions;

export default bagSlice;