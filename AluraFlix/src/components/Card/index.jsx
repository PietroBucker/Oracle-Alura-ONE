import ButtonCard from '../ButtonCard';
import Style from './Card.module.css';
import delIcon from '@/assets/deletar.svg';
import editIcon from '@/assets/editar.svg';

export default function Card({ videos }) {
  return videos.length === 0 ? '' : videos.map((video) => (
    <div key={ video.id } className={ Style.container }>
      <div className={ Style.video }>

        <iframe
          src="https://www.youtube.com/embed/w0MHqxRCM1Y?si=0Epsu3PWDQbMVMMS"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <div className={ Style.buttonContainer }>
        <ButtonCard icon={ delIcon }>deletar</ButtonCard>
        <ButtonCard icon={ editIcon }>editar</ButtonCard>
      </div>
    </div>
  ));
}
