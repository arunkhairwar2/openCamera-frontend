import { useEffect, useRef } from "react";
import { BiSolidCamera, BiSolidCameraOff } from "react-icons/bi";
import { FaExpand, FaRegPauseCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdCamera } from "react-icons/md";
import { PiVideoCameraFill, PiVideoCameraSlashFill } from "react-icons/pi";
import {
  setIsCameraOpen,
  setIsRecording,
} from "../../../redux/slices/mediaSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

export let videoRef: any;

function LivePreview() {
  const { isRecording, isCameraOpen } = useAppSelector((state) => state.media);

  const dispatch = useAppDispatch();

  const videoRefrence = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    videoRef = videoRefrence;
  });
  return (
    <div
      className={`border border-red-400 w-full h-full flex flex-col justify-between p-2 relative  ${
        !isCameraOpen && " text-white bg-[#272a30]"
      } `}
    >
      <video
        ref={videoRefrence}
        autoPlay
        muted
        playsInline
        className={`w-full h-full absolute  object-fill z-0 top-0 left-0 ${
          !isCameraOpen && "bg-black"
        }`}
      />
      {!isCameraOpen && (
        <button
          className="relative top-0 "
          onClick={() => dispatch(setIsCameraOpen(!isCameraOpen))}
        >
          {isCameraOpen ? (
            <BiSolidCamera size={30} />
          ) : (
            <BiSolidCameraOff size={30} />
          )}
        </button>
      )}

      {isCameraOpen && (
        <div className=" h-full w-full  relative z-10">
          <div className="flex  justify-between  ">
            <button onClick={() => dispatch(setIsCameraOpen(!isCameraOpen))}>
              {isCameraOpen ? (
                <BiSolidCamera size={30} />
              ) : (
                <BiSolidCameraOff size={30} />
              )}
            </button>
            <div>
              <span>00:00/10:00</span>
            </div>
            <button>
              <IoClose size={30} />
            </button>
          </div>
          <div>
            <div className="flex justify-between absolute w-full bottom-0">
              <button>
                <MdCamera size={30} />
              </button>
              <div className={`flex gap-2 ${isRecording && "text-red-500"}`}>
                <button onClick={() => dispatch(setIsRecording(!isRecording))}>
                  {isRecording ? (
                    <PiVideoCameraFill size={30} />
                  ) : (
                    <PiVideoCameraSlashFill size={30} />
                  )}
                </button>
                <button>
                  <FaRegPauseCircle size={30} />
                </button>
              </div>

              <div className="flex gap-2 items-center">
                <button>
                  <IoMdSettings size={30} />
                </button>
                <button>
                  <FaExpand size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LivePreview;
