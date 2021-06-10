import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './theme-toggle/themeSlice';

export default configureStore({
  reducer: {
    theme: themeReducer
  },
});
