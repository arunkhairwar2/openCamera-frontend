import { videoRef } from "../components/home/video-recorder/livePreview";
import { useAppDispatch } from "../redux/store";
import { openCamera } from "../redux/thunks/media.thunk";

export const getCameraStream = async () => {
  return navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
};

export const cameraService = () => {
  // const dispatch = useAppDispatch();
  // dispatch(openCamera(videoRef));
};
