import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import {
  setIncomeAction,
  addExpenseAction,
  incrementActionPerform,
} from "store/expense/expense-slice";

export const loggerMiddleaware = createListenerMiddleware();

loggerMiddleaware.startListening({
  matcher: isAnyOf(setIncomeAction, addExpenseAction),
  effect: async (action, listenerAPI) => {
    console.log("action", action);
    listenerAPI.dispatch(incrementActionPerform());
    console.log("New store value", listenerAPI.getState());
  },
});

// >>>>>to clear local storage in the console
// localStorage.clear()
