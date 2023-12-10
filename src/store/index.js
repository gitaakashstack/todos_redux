import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter-slice";
import taskSlice from "./task-slice";

const store = configureStore({
  reducer: { task: taskSlice.reducer, filter: filterSlice.reducer },
});

export default store;
