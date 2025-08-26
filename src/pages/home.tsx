import NavbarParent from "../components/home/navbar/navbar-parent";
import VideoRecorderParent from "../components/home/video-recorder/video-recorder-parent";

function HomePage() {
  return (
    <div className="w-screen flex flex-col gap-4">
      <div>
        <NavbarParent />
      </div>
      <div>
        <VideoRecorderParent />
      </div>
    </div>
  );
}

export default HomePage;
