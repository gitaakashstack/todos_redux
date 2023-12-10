import { createSlice } from "@reduxjs/toolkit";

export const taskStatus = {
  all: "All",
  active: "Active",
  completed: "Completed",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    status: taskStatus.all,
    colors: [],
  },
  reducers: {
    setTaskStatus(state, { payload }) {
      state.status = payload;
    },

    setTaskColors(state, { payload }) {
      if (state.colors.includes(payload))
        state.colors = state.colors.filter((color) => color !== payload);
      else state.colors.push(payload);
    },
  },
});

export default filterSlice;

export const filterActionCreator = filterSlice.actions;
