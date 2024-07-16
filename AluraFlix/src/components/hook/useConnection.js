import { useContext } from 'react';
import { VideoContext } from '../../context/VideoContext';

export const useConnection = () => {
  const { video, setVideo, setUpdatePage } = useContext(VideoContext);
  const cleanInput = () => {
    setVideo({
      titulo: '',
      descricao: '',
      imagem: '',
      video: '',
      categoria: '',
    });
  };
  const saveVideo = async () => {
    try {
      const response = await fetch(`https://apitestdevvideo.onrender.com/${video.categoria}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(video),
      });
      setUpdatePage(true);
      cleanInput();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const updateVideo = async () => {

  };

  const deleteVideo = async () => {

  };

  return {
    saveVideo,
    updateVideo,
    deleteVideo,
    cleanInput,
  };
};
