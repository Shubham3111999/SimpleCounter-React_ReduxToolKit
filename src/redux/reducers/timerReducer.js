import {createSlice} from "@reduxjs/toolkit"


const INITIAL_STATE = { isRunning: false, elapsedTime: 0 };

// refactor to use the createSlice method
// export const timerReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case START_TIMER:
//       return { ...state, isRunning: true };
//     case PAUSE_TIMER:
//       return { ...state, isRunning: false };

//     case RESET_TIMER:
//       return { isRunning: false, elapsedTime: 0 };
//     case INCREMENT_TIMER:
//       return { ...state, elapsedTime: ++state.elapsedTime };
//     default:
//       return state;
//   }
// };

const timerSlice = createSlice({
  name: "timer",
  initialState: INITIAL_STATE,
  reducers: {

    startTimer: (state, action) => {
       state.isRunning=true;
    },

    pauseTimer: (state, action) => {
      state.isRunning=false;
    }
    ,

    resetTimer: (state, action) => {
      state.isRunning=false; state.elapsedTime=0;
    },

    increaseTimer: (state, action) => {
      state.elapsedTime= ++state.elapsedTime
    }

  }
})

export const timerReducer=timerSlice.reducer;
export const action=timerSlice.actions;

// export the timer reducer function and action creators here
