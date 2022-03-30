import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../utils/axios";

const initialState = {
  token: null,
  user: {},
  isLoading: false,
  error: null,
};

export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios.post("/signup", data);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const authSignIn = createAsyncThunk(
  "auth/signIn",
  async (data, { rejectWithValue }) => {
    try {
      const result = await axios({
        url: "/login",
        method: "post",
        data,
        headers: {
          "Content-Type": "application/json",
        }
      });
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clear: (state) => {
      state.token = null;
      state.user = {};
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authSignUp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data;
      state.token = action.payload.data.token;
    });
    builder.addCase(authSignUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
    builder.addCase(authSignIn.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authSignIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.data.data;
      state.token = action.payload.data.token;
    });
    builder.addCase(authSignIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
  },
});

export const { clear } = authSlice.actions;

export const selectAuth = (state) => state.user;

export default authSlice.reducer;
