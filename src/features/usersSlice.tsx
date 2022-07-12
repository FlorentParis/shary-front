import { createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
  data: []
  };

const usersSlice = createSlice({
  name: 'users',
  initialState, 
  reducers: {
    setUsersData : (state, {payload}) => {
      state.data = payload;
    },
    addUsers: (state, {payload}) => {
      state.data = payload
    },
   
  }
})

  export const { addUsers, setUsersData } = usersSlice.actions
  export const getAllUsers = (state: any) => state.users
  
  export default usersSlice.reducer;