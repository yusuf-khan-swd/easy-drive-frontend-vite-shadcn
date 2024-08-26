import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  _id: string;
  email: string;
  role: string;
  exp: string;
  iat: string;
}

interface IUserState {
  token: string;
  user: IUser;
}

const initialState: IUserState = {
  token: "",
  user: {
    _id: "",
    email: "",
    role: "",
    exp: "",
    iat: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = { ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
