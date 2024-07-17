import { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { VideoContext } from '../../context/VideoContext';
import { useConnection } from '../hook/useConnection';
import ButtonCard from '../ButtonCard';
import Style from './Card.module.css';
import delIcon from '@/assets/deletar.svg';
import editIcon from '@/assets/editar.svg';
import destaque from '@/assets/destaque.png';

export default function Card({ videos }) {
  const { setIsEditing, setDestaque } = useContext(VideoContext);
  const { deleteVideo } = useConnection();
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    if (carouselRef.current) {
      const handleResize = () => {
        setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      };
      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [carouselWidth]);

  return videos.length === 0 ? ''
    : (
      <motion.div
        style={ { overflowX: 'hidden' } }
      >
        <motion.div
          ref={ carouselRef }
          drag="x"
          dragConstraints={ { right: 0, left: -carouselWidth } }
          className={ Style.cardsContainer }
        >

          {videos.map((video) => (
            <motion.div key={ video.id } className={ Style.container }>
              <div className={ `${Style.video} ${Style[video.categoria]}` }>

                <iframe
                  src={ video.video }
                  title={ video.titulo }
                  allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                <div className={ Style.desc }>{video.descricao}</div>
              </div>

              <div className={ `${Style.buttonContainer} ${Style[video.categoria]}` }>
                <ButtonCard icon={ delIcon } onClick={ () => deleteVideo(video.id) }>deletar</ButtonCard>
                <ButtonCard icon={ editIcon } onClick={ () => setIsEditing(video.id) }>editar</ButtonCard>
              </div>
              <ButtonCard onClick={ () => setDestaque(video) } icon={ destaque } tamanho="30px" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    );
}
