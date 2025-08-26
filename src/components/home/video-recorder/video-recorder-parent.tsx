function VideoRecorderParent() {
  return (
    <div className="border flex justify-center">
      <div className="h-[440px] w-[640px] border ">
        <div className="border border-red-400 w-full h-full flex flex-col justify-between p-2">
          <div className="flex border border-green-600 justify-between">
            <button>caputre</button>
            <button>start</button>
            <button>stop</button>
          </div>
          <div className="flex">
            <button>caputre</button>
            <button>start</button>
            <button>stop</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoRecorderParent;
