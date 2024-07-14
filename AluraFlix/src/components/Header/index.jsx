import { useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import Button from '../Button';
import Style from './Header.module.css';

export default function Header() {
  const { pathname } = useLocation();
  const changeColor = (to) => (pathname === to ? 'blue' : 'white');
  return (
    <div className={ Style.container }>
      <img src={ logo } alt="" />

      <div className={ Style.buttonContainer }>
        <Button
          to="/"
          type={ changeColor('/') }

        >
          HOME
        </Button>
        <Button
          to="/novo-video"
          type={ changeColor('/novo-video') }
        >
          NOVO VÍDEO
        </Button>
      </div>
    </div>
  );
}
