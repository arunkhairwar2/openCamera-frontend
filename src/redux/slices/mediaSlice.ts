import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mediaInitialState } from "../states/mediaInitialState";
import { openCamera } from "../thunks/media.thunks";

const mediaSlice = createSlice({
  name: "media",
  initialState: mediaInitialState,
  reducers: {
    setIsRecording: (state, actions: PayloadAction<boolean>) => {
      state.isRecording = actions.payload;
    },
    setIsCameraOpen: (state, actions: PayloadAction<boolean>) => {
      state.isCameraOpen = actions.payload;
      if (!state.isCameraOpen) {
        openCamera();
        console.log("camera State ", state.isCameraOpen);
      }
    },
    setMediaError: (state, actions: PayloadAction<string | null>) => {
      state.mediaError = actions.payload;
    },
  },
});

export const { setIsRecording, setIsCameraOpen, setMediaError } =
  mediaSlice.actions;
export default mediaSlice.reducer;
