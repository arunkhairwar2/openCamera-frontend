export type mediaType = {
  isRecording: boolean;
  isCameraOpen: boolean;
  mediaError: null | string;
  videoRef: React.RefObject<HTMLVideoElement | null>;
};

export type videoRefType = {
  videoRef: React.RefObject<HTMLVideoElement>;
};
