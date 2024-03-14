// blogSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../Server";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await fetch(`${server}/get_all_blogs`);
  console.log("response", response);

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const data = await response.json();
  console.log("Blogs data received:", data);
  return data;
  // return await response.json();
});

export const fetchBlogById = createAsyncThunk(
  "blogs/fetchBlogById",
  async (id) => {
    const response = await fetch(`${server}/get_blog_by_id/${id}`);
    console.log("response", response);
    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }
    return await response.json();
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    allBlogs: [],
    currentBlog: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allBlogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchBlogById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentBlog = action.payload;
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
