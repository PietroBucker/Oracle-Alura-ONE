// import Style from './Header.module.css';
import logo from '@/assets/logo.png';
import Button from '../Button';
import Style from './Header.module.css';

export default function Header() {
  return (
    <div className={ Style.container }>
      <img src={ logo } alt="" />

      <div className={ Style.buttonContainer }>
        <Button
          to="/"
          type="blue"
        >
          HOME
        </Button>
        <Button
          to="/novo-video"
          type="white"
        >
          NOVO VÍDEO
        </Button>
      </div>
    </div>
  );
}
