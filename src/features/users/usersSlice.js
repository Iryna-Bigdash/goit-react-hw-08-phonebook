import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Jane Look'}, 
    {id: '1', name: 'Nail Rove'},
    {id: '2', name: 'Dave Grey'},
]

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export const selectAllUsers = state => state.users;
export default userSlice.reducer;