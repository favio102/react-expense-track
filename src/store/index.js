import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleaware } from "./middlewares/logger-middleware";
// To persist data
// 1 - Combine the reducers (slices content) into a single reducer
const rootReducer = combineReducers({
  EXPENSE: expenseSlice.reducer,
});
// 2 - Create a basic configuration to tell redux to use the local storage
const persistConfig = {
  key: "root",
  storage: storage,
  // blacklist: ["EXPENSE"],
  // whitelist: ["EXPENSE"],
};

// 3 - Persist the reducers
const persistedReducers = persistReducer(persistConfig, rootReducer);

// 4 - Send the persisted reducers to the store
const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(loggerMiddleaware.middleware),
});

// 5 - Create a persisted version of the store
const persistor = persistStore(store);

// 6 - Export the persisted version of the store

// 7 - Use the persistGate component to give the app access to the persisted store

// 8 - Tell redux to ignore all the actions sent by redux-persist

export { store, persistor };
