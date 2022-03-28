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
      const result = await axios.post("/sign-up", data);
      console.log(result);
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
      const result = await axios.post("/sign-in", data);
      console.log(result);
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
    logout: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authSignUp.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.token = action.payload.token;
    });
    builder.addCase(authSignUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(authSignIn.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authSignIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.token = action.payload.token;
    });
    builder.addCase(authSignIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { increment, decrement, incrementByAmount } = authSlice.actions;

export const selectAuth = (state) => state.user;

export default authSlice.reducer;
