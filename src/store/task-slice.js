import { createSlice } from "@reduxjs/toolkit";
import { taskStatus } from "./filter-slice";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    incompleteTasks: 3,
  },
  reducers: {
    loadTasks(state, { payload }) {
      state.tasks = payload;
    },

    appendTask(state, { payload }) {
      const lastTaskID = state.tasks[state.tasks.length - 1].id;
      const intPart = parseInt(lastTaskID.slice(1));
      const newID = "t" + (intPart + 1);
      state.tasks.push({
        id: newID,
        task: payload,
        completed: false,
        color: null,
      });
    },

    updateCompletionStatus(state, { payload }) {
      const taskToBeUpdated = state.tasks.find(
        (task) => task.id === payload.id
      );
      taskToBeUpdated.completed = !taskToBeUpdated.completed;
      if (taskToBeUpdated.completed) state.incompleteTasks--;
      else state.incompleteTasks++;
    },

    updateTaskColor(state, { payload }) {
      const taskToBeUpdated = state.tasks.find(
        (task) => task.id === payload.id
      );
      taskToBeUpdated.color = payload.taskColor;
    },

    markTasksCompleted(state) {
      state.tasks.forEach((task) => (task.completed = true));
      state.incompleteTasks = 0;
    },

    clearTaskCompletion(state) {
      state.tasks.forEach((task) => (task.completed = false));
      state.incompleteTasks = 3;
    },

    filterTasksByStatus(state, { payload }) {
      if (payload === taskStatus.active)
        return state.tasks.filter((task) => !task.completed) || [];
      else if (payload === taskStatus.completed)
        return state.tasks.filter((task) => task.completed) || [];
      else return state;
    },
  },
});

export const LoadTasks = function () {
  return async (dispatch) => {
    const response = await fetch(
      "https://practice-http-request-default-rtdb.asia-southeast1.firebasedatabase.app/redux-toolkit-todo.json"
    );
    const responseData = await response.json();
    const taskArray = [];
    for (const key in responseData) {
      taskArray.push({
        id: key,
        task: responseData[key],
        completed: false,
        color: null,
      });
    }

    dispatch(taskActionCreator.loadTasks(taskArray));
  };
};

export default taskSlice;
export const taskActionCreator = taskSlice.actions;
