import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './theme-toggle/themeSlice';
import calculatorReducer from './calculator/calculatorSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    calculator: calculatorReducer,
  },
});
