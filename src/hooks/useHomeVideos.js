import { useDispatch, useSelector } from "react-redux";
import { addHomeVideos } from "../utils/videoSlice";
import { useEffect } from "react";
import { API_KEY } from "../utils/constants";

const useHomeVideos = () => {
  const homeVideos = useSelector((store) => store.video.homeVideos);
  const dispatch = useDispatch();

  const getVideo = async () => {
    const query = "trending tech skills tutorials ";
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&videoDuration=medium&maxResults=50&q=${query}&key=${API_KEY}`
    );
    const json = await data.json();
    dispatch(addHomeVideos(json.items));
  };


  useEffect(() => {
    if (!homeVideos) getVideo();
  }, []);
};

export default useHomeVideos;
