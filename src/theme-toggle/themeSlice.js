import {createSlice} from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    number: 1,
  },
  reducers: {
    toggle: (state) => {
      if (state.number === 3) {
        state.number = 1;

        return;
      }

      state.number += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggle} = themeSlice.actions;

export default themeSlice.reducer;