import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import blogReducer from "./blogSlice";
import slices from "./topicsSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer,
    topics: slices.topics,
    dialog: slices.dialog,
  },
});

export default store;
