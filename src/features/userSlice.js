import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
    SET_TOKEN: (state, action) => {
      state.token = action.payload;
    },
    LOGOUT: (state) => {
      state.user = null;
      state.token = null;
    }
  },
});

export const { SET_USER, SET_TOKEN, LOGOUT } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;

export default userSlice.reducer;
