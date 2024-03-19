import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [{ name: "Apple", price: 1.23 }],
  },
  reducers: {
    addExpenseAction: (currentSlice) => {
      console.log("addExpenseAction");
      currentSlice.expenseList.push({name: 'orange', price: '23.3'})
    },
  },
});

export const { addExpenseAction } = expenseSlice.actions;
