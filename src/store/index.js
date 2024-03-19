import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { auth } from "./auth/auth";

const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice.reducer,
    AUTH: auth.reducer
  }
});

export { store };
