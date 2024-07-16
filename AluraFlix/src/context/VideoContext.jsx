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
  const [updatePage, setUpdatePage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (endPoint) => {
      const response = await fetch(`https://apitestdevvideo.onrender.com/${endPoint}`);
      if (!response.ok) {
        throw new Error('Não foi possível pegar os dados');
      }
      const data = await response.json();
      setVideos((prevState) => ({
        ...prevState,
        [endPoint]: data,
      }));
    };

    Promise.all([
      fetchData('frontend'),
      fetchData('backend'),
      fetchData('inovacao'),
      fetchData('gestao'),
    ])
      .then(() => setIsLoading(false));

    if (updatePage) {
      setUpdatePage(false);
    }
  }, [updatePage]);

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
          setUpdatePage,
          isLoading,
      }
      }
    >
      { children }
    </VideoContext.Provider>
  );
}
