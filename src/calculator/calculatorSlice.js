import {createSlice} from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
  name: 'theme',
  initialState: {
    currentInput: 'a', // a, b, or result
    operation: '', // add, subtract, multiply, divide
    result: 0,
    input: {
      a: '0',
      b: '0'
    },
  },
  reducers: {
    reset: (state) => {
      state.result = 0;
      state.operation = '';
      state.input = {a: '0', b: '0'};
      state.currentInput = 'a';
    },
    appendToInput: (state, action) => {
      // const {currentInput, input} = state;
      // const {payload} = action;

      // if (currentInput === 'result') {
      //   // TODO can i call same reset logic?
      //   state.result = 0;
      //   state.operation = '';
      //   state.input = {a: '0', b: '0'};
      //   state.currentInput = 'a'

      //   if (payload === '.') {
      //     state.input.a = "0."
      //   }
      //   else {
      //     state.input.a = payload;
      //   }

      //   return;
      // }

      

      // const currentInputValue = input[currentInput] || 0;

      // if (payload === '.' && currentInputValue.includes('.')) {
      //   // don't add more decimals if one already present
      //   return;
      // }

      // state.input[currentInput] = `${currentInputValue}${payload}`;
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
      state.currentInput = 'b';
    },
    clearInput: (state) => {
      const {currentInput} = state;

      if (currentInput === 'a' || currentInput === 'b') {
        state.input[currentInput] = '0';
      }
    },
    getResult: (state) => {
      const {input: {a = '0', b = '0'}, operation = 'add'} = state;
      const numberA = parseFloat(a);
      const numberB = parseFloat(b);

      if (isNaN(numberA) || isNaN(numberB)) {
        state.result = 'NaN';

        return;
      }

      let result = 0;
      switch (operation) {
        case 'add':
          result = numberA + numberB;
          break;

        case 'subtract':
          result = numberA - numberB;
          break;

        case 'multiply':
          result = numberA * numberB;
          break;

        case 'divide':
          result = numberA / numberB;
          break;

        default:
          break;
      }

      state.result = result;
      state.currentInput = 'result';
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  reset,
  appendToInput,
  setOperation,
  clearInput,
  getResult,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;