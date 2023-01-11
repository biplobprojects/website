import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {userDetails:[]},

  reducers: {
    userDet: (state, action) => {
      const data = [...action.payload];
      return(state ={
        ...state,
        userDetails:data,
        });
  },
}});
// this is for dispatch
export const { userDet } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;

