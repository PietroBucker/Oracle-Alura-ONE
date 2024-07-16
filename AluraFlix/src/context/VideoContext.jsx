import { useEffect, createContext, useState } from 'react';

export const VideoContext = createContext();

const initialStateVideo = {
  titulo: '',
  descricao: '',
  imagem: '',
  video: '',
  categoria: '',
};
const initialStateVideos = {
  frontend: [],
  backend: [],
  inovacao: [],
  gestao: [],
};

export function VideoProvider({ children }) {
  const [video, setVideo] = useState(initialStateVideo);
  const [videos, setVideos] = useState(initialStateVideos);
  const [categories, setCategories] = useState(['frontend', 'backend', 'inovacao', 'gestao']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (endPoint) => {
      const response = await fetch(`https://apitestdevvideo.onrender.com/${endPoint}`);
      if (!response.ok) {
        throw new Error('Não foi possível pegar os dados');
      }
      return response.json();
    };

    Promise.all([
      fetchData('frontend'),
      fetchData('backend'),
      fetchData('inovacao'),
      fetchData('gestao'),
    ])
      .then((results) => {
        setVideos({
          frontend: results[0],
          backend: results[1],
          inovacao: results[2],
          gestao: results[3],
        });
        if (isLoading) setIsLoading(false);
        console.log('fetch');
      });
  }, [isLoading]);

  const onChange = (event) => {
    const { name, value } = event.target;

    setVideo({
      ...video,
      [name]: value,
    });
  };

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
          onChange,
          isLoading,
          setIsLoading,
      }
      }
    >
      { children }
    </VideoContext.Provider>
  );
}
