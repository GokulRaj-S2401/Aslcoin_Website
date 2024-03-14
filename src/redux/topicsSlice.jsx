// slices.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../Server";

// Initial state for topics slice
const initialTopicsState = {
  topics: [],
  selectedTopic: null,
};

// Initial state for dialog slice
const initialDialogState = {
  categories: [],
  tags: [],
};

// Async thunk to fetch topics
export const fetchTopics = createAsyncThunk("topics/fetchTopics", async () => {
  const response = await axios.get(`${server}/get_all_topic`);
  return response.data;
});

// Async thunk to fetch options for dialog
export const fetchOptions = createAsyncThunk(
  "dialog/fetchOptions",
  async () => {
    const categoriesResponse = await axios.get(`${server}/get_category`);
    const tagsResponse = await axios.get(`${server}/get_tags`);
    return { categories: categoriesResponse.data, tags: tagsResponse.data };
  }
);

// Topics slice
const topicsSlice = createSlice({
  name: "topics",
  initialState: initialTopicsState,
  reducers: {
    selectTopic(state, action) {
      state.selectedTopic = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopics.fulfilled, (state, action) => {
      state.topics = action.payload;
    });
  },
});

// Dialog slice
const dialogSlice = createSlice({
  name: "dialog",
  initialState: initialDialogState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOptions.fulfilled, (state, action) => {
      state.categories = action.payload.categories;
      state.tags = action.payload.tags;
    });
  },
});

// Export the reducers and actions
export const { selectTopic } = topicsSlice.actions;
export default { topics: topicsSlice.reducer, dialog: dialogSlice.reducer };
