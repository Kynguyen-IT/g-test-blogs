import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlogState {
  value: number;
}

const initialState: BlogState = {
  // blogs: [],
  // blogDetail: {},
  value: 0,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = blogSlice.actions;

export default blogSlice.reducer;
