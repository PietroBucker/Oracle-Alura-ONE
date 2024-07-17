import { useContext } from 'react';
import { VideoContext } from '../../context/VideoContext';

export const useConnection = () => {
  const { video, cleanInput, setIsLoading } = useContext(VideoContext);

  const saveVideo = async () => {
    try {
      const response = await fetch(`https://apitestdevvideo.onrender.com/${video.categoria}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(video),
      });
      setIsLoading(true);
      cleanInput();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const updateVideo = async (id) => {
    try {
      const response = await fetch(`https://apitestdevvideo.onrender.com/${video.categoria}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(video),
      });
      setIsLoading(true);
      cleanInput();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVideo = async (id) => {
    try {
      const response = await fetch(`https://apitestdevvideo.onrender.com/${video.categoria}/${id}`, {
        method: 'DELETE',
      });
      setIsLoading(true);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    saveVideo,
    updateVideo,
    deleteVideo,
    cleanInput,
  };
};
