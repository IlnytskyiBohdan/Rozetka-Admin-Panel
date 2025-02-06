import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_Users } from "../../redux/constans/constans";

export const loginUser = createAsyncThunk("auth/loginUser", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.get(API_Users);
    const users = response.data;
    const user = users.find((u) => u.userName === data.userName && u.password === data.password);

    if (!user) {
      throw new Error("Invalid User Name or Password");
    }

    return user;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
