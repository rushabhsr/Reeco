import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    setOrders: (state, action) => {
      return action.payload;
    },
  },
});

export const { setOrders } = orderSlice.actions;

export default orderSlice.reducer;
