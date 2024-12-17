import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const createComment = createAsyncThunk(
  "comment/createComment",
  async ({ postId, comment }) => {
    try {
      const { data } = await axios.post(`/comments/${postId}`, {
        postId,
        comment,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPostComments = createAsyncThunk(
  "comment/getPostComments",
  async (postId) => {
    try {
      const { data } = await axios.get(`/posts/comments/${postId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(createComment.pending, (state) => {
      state.loading = true;
    });
    build.addCase(createComment.fulfilled, (state, action) => {
      state.loading = false;
      state.comments.push(action.payload);
    });
    build.addCase(createComment.rejected, (state) => {
      state.loading = false;
    });
    // get all comments
    build.addCase(getPostComments.pending, (state) => {
      state.loading = true;
    });
    build.addCase(getPostComments.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    });
    build.addCase(getPostComments.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default commentSlice.reducer;
