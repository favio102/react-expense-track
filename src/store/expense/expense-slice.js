import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: []
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      // console.log("action",action);
      currentSlice.expenseList.push(action.payload)
    },
  },
});

export const { addExpenseAction } = expenseSlice.actions;
