import ButtonCard from '../ButtonCard';
import Style from './Card.module.css';
import delIcon from '@/assets/deletar.svg';
import editIcon from '@/assets/editar.svg';

export default function Card({ videos }) {
  return videos.length === 0 ? '' : videos.map((video) => (
    <div key={ video.id } className={ Style.container }>
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
        <ButtonCard icon={ delIcon }>deletar</ButtonCard>
        <ButtonCard icon={ editIcon }>editar</ButtonCard>
      </div>
    </div>
  ));
}
