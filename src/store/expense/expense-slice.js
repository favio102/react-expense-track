import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [{ name: "Apple", price: 1.23 }],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      // console.log("action",action);
      currentSlice.expenseList.push(action.payload)
    },
  },
});

export const { addExpenseAction } = expenseSlice.actions;
