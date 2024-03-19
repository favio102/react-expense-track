import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
  name: "auth",
  initialState: {
    user1: [{id: 'rrt', pass: 43, login: true}],
    user2: [{id: 'gf', pass: 12, login: false}],
  },
});