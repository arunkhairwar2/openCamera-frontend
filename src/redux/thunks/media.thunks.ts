import { createAsyncThunk } from "@reduxjs/toolkit";
import { setMediaError } from "../slices/mediaSlice";

export const openCamera = createAsyncThunk(
  "openCamera",
  async (_, { dispatch }) => {
    try {
      dispatch(setMediaError(null));
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      console.log("stream", stream);
      // if (videoRef.current) {
      //   videoRef.current.srcObject = stream;
      //   setCameraOpen(true);
      // }
    } catch (err) {
      // setError("Failed to access camera: " + err.message);
      console.error("Error accessing camera:", err);
    }
  }
);
