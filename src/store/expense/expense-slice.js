import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    expenseList: [],
    countActionPerformed: 0,
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      // console.log("action",action);
      currentSlice.expenseList.push(action.payload);
    },
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
    incrementActionPerform: (currentSlice, action) => {
      currentSlice.countActionPerformed++;
    },
  },
});

export const { addExpenseAction, setIncomeAction, incrementActionPerform } =
  expenseSlice.actions;
