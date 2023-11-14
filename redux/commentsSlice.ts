
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

export const fetchComments = createAsyncThunk("api/fetchComments", async () => {
    const response = await axios.get((process.env.COMMENTS_API), {
        
    });

    return response.data;
});

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = "idle";
        // @ts-ignore
        state.error = action.error.message;
      });
  },
});

export const selectComments = (state: { comments: { data: any; }; }) => state.comments.data;
export default commentsSlice.reducer;