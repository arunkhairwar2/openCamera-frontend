import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { mediaInitialState } from "../states/mediaInitialState";
import { openCamera } from "../thunks/media.thunk";
import { videoRef } from "../../components/home/video-recorder/livePreview";
import { cameraService } from "../../services/media.service";
const mediaSlice = createSlice({
  name: "media",
  initialState: mediaInitialState,
  reducers: {
    setIsRecording: (state, action: PayloadAction<boolean>) => {
      state.isRecording = action.payload;
    },
    setIsCameraOpen: (state, action: PayloadAction<boolean>) => {
      // state.isCameraOpen = action.payload;
      console.info("slice is camera open info", state.isCameraOpen);

      if (!state.isCameraOpen) {
        cameraService();
        console.log("function called");
      }
    },

    setMediaError: (state, action: PayloadAction<string | null>) => {
      state.mediaError = action.payload;
    },

    setVideoRef: (
      state,
      action: PayloadAction<React.RefObject<HTMLVideoElement | null>>
    ) => {
      // Directly assign to the property, since Immer cannot handle DOM nodes
      console.log("vidoeRef payload", action.payload);

      (state as any).videoRef = action.payload;
    },
  },
});

export const { setIsRecording, setIsCameraOpen, setMediaError, setVideoRef } =
  mediaSlice.actions;
export default mediaSlice.reducer;
