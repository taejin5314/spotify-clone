import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
    playlists: null,
  },
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
    SET_TOKEN: (state, action) => {
      state.token = action.payload;
    },
    SET_PLAYLISTS: (state, action) => {
      state.playlists = action.payload;
    },
    LOGOUT: (state) => {
      state.user = null;
      state.token = null;
      state.playlists = null;
    }
  },
});

export const { SET_USER, SET_TOKEN, SET_PLAYLISTS, LOGOUT } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;
export const selectPlaylists = (state) => state.user.playlists;

export default userSlice.reducer;
