import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface IUserState {
  token: string;
  user: IUser;
}

const initialState: IUserState = {
  token: "",
  user: {
    _id: "",
    name: "",
    email: "",
    role: "",
    createdAt: "",
    updatedAt: "",
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
    setLogout: (state) => {
      localStorage.removeItem("easy-drive-token");
      state.token = "";
      state.user = {
        _id: "",
        name: "",
        email: "",
        role: "",
        createdAt: "",
        updatedAt: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
