import LivePreview from "./livePreview";

const VideoRecorderParent = () => {
  return (
    <div className=" flex justify-center">
      <div className="h-[480px] w-[845px] ">
        <LivePreview />
      </div>
    </div>
  );
};

export default VideoRecorderParent;
