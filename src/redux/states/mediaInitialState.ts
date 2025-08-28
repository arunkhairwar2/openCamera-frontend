import type { mediaType } from "../../types/media.types";

export const mediaInitialState: mediaType = {
  isRecording: false,
  isCameraOpen: false,
  mediaError: null,
  videoRef: { current: null },
};
