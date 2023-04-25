import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../fakedata";
export const userslice = createSlice({
  name: "users",
  initialState: {
    value: UsersData,
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteuser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateuser: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});
export const { addUser, deleteuser, updateuser } = userslice.actions;
export default userslice.reducer;
