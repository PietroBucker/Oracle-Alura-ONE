import { useEffect, createContext, useState } from 'react';

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [video, setVideo] = useState({});
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://json-server-seven-black.vercel.app/videos')
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setCategories(Object.keys(data));
      });
  }, []);
  return (
    <VideoContext.Provider
      value={
        {
          video,
          setVideo,
          videos,
          setVideos,
          categories,
          setCategories,
      }
      }
    >
      { children }
    </VideoContext.Provider>
  );
}
