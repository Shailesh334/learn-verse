import { useEffect } from "react";
import { API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopicVideos } from "../utils/videoSlice";

const useTopicData = (name) => {
  const query = name + "Tutorials";
  const dispatch = useDispatch();

  const getData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&videoDuration=medium&maxResults=50&q=${query}&key=${API_KEY}`
    );
    const json = await data.json();
    dispatch(addTopicVideos(json.items));
  };
  useEffect(() => {
  //  getData();
  }, []);
};

export default useTopicData;
