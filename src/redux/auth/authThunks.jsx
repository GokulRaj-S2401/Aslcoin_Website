import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { loginSuccess, loginFailure, loginStart } from "../authSlice";
import { server } from "../../Server";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    try {
      const response = await axios.post(`${server}/community_user_login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch(loginStart());
      const response = await axios.post(`${server}/community_user_login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      const token = localStorage.getItem("token");
      console.log("token", token);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
