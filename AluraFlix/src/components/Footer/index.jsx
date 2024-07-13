import logo from '@/assets/logo.png';
import Style from './Footer.module.css';

export default function Footer() {
  return (
    <div className={ Style.container }>
      <img src={ logo } alt="" />
    </div>
  );
}
