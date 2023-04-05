import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { cartIsVisable: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialCounterState,
  reducers: {
    toggle(state) {
      state.cartIsVisable = !state.cartIsVisable;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
