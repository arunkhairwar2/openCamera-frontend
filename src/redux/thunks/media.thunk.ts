// mediaSlice.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCameraStream } from "../../services/media.service";
import { setIsCameraOpen, setMediaError } from "../slices/mediaSlice";
// import RootState from your store definition, not from @reduxjs/toolkit/query
import type { RootState } from "../store";

export const openCamera = createAsyncThunk(
  "media/openCamera",
  async (videoRef: any, { dispatch, getState }) => {
    console.log("thunks called");
    try {
      dispatch(setMediaError(null));

      const stream = await getCameraStream();

      if (videoRef) {
        // videoRef.srcObject = stream;
        console.log("vidoeRefrence in thunk", videoRef);
        dispatch(setIsCameraOpen(true));
      }
    } catch (err: any) {
      dispatch(setMediaError(`Failed to access camera: ${err.message}`));
    }
  }
);
