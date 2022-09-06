import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showingModal: (state) => {
      state.modal = true;
    },
    closingModal: (state) => {
      state.modal = false;
    },
  },
});
export const { showingModal, closingModal } = modalSlice.actions;

export default modalSlice.reducer;
