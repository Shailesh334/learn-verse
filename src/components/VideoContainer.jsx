
import { useSelector } from "react-redux";
import useHomeVideos from "../hooks/useHomeVideos";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";


const VideoContainer = () => {
  
  const homeVideos = useSelector((store) => store.video.homeVideos);

  useHomeVideos();

  if (!homeVideos) return <Shimmer />;

  return (
    <div className="w-[85%] flex flex-wrap justify-center">
      {homeVideos.map((video) => (
        <VideoCard key={video.id.videoId} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
