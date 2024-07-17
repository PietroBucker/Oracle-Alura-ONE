import { useContext } from 'react';
import { VideoContext } from '../../context/VideoContext';
import Tag from '../Tag';
import Style from './Banner.module.css';

export default function Banner() {
  const { destaque, isLoading } = useContext(VideoContext);
  return isLoading ? <div>carregando</div>

    : (
      <div
        style={ { backgroundImage: `url(${destaque.imagem})` } }
        className={ Style.container }
      >
        <div className={ Style.infoContainer }>
          <Tag>{destaque.categoria}</Tag>
          <h1 className={ Style.textTitle }>{destaque.titulo}</h1>
          <p>
            {destaque.descricao}
          </p>
        </div>
        <div className={ `${Style.video} ${Style[destaque.categoria]}` }>

          <iframe
            src={ destaque.video }
            title={ destaque.titulo }
            allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    );
}
