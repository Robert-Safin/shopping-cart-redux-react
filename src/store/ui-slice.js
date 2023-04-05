import { createSlice} from "@reduxjs/toolkit";

const initialCounterState = { cartIsVisable: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialCounterState,
  reducers: {
    toggle(state) {
      state.cartIsVisable = !state.cartIsVisable
    }
  },
});

export const uiActions = uiSlice.actions
export default uiSlice
