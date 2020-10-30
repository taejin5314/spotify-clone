import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
    name: 'song',
    initialState: {
        song: null,
    },
    reducers: {
        SET_SONG: (state, action) => {
            state.song = action.payload;
        },
    },
});

export const { SET_SONG } = songSlice.actions;

export const selectSong = (state) => state.song.song;


export default songSlice.reducer;
