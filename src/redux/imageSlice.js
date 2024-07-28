import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: [],
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImages: (state, action) => {
      state.images = [...state.images, ...action.payload];
    },
    removeImage: (state, action) => {
      state.images = state.images.filter((_, index) => index !== action.payload);
    },
    clearImages: (state) => {
      state.images = [];
    },
  },
});

export const { addImages, removeImage, clearImages } = imageSlice.actions;
export default imageSlice.reducer;
