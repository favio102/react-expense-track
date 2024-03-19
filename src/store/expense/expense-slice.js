import { createSlice } from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [
      { name: "Aplle", price: 1.23 }
    ],
  },
});
