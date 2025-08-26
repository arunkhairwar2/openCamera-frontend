import { setMediaError } from "../redux/slices/mediaSlice";
import type { AppDispatch } from "../redux/store";

export class Media {
  private dispatch: AppDispatch; //declear but not intilize

  constructor(dispatch: AppDispatch) {
    this.dispatch = dispatch; //intilize here.
  }

  public openCamera = async () => {
    try {
      this.dispatch(setMediaError(null));
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
  };
}

export const closeCamera = () => {};
export const startRecording = () => {};
export const stopRecording = () => {};
export const pauseRecording = () => {};
export const resumeRecording = () => {};
