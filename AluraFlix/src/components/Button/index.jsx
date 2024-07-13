import { Link } from 'react-router-dom';
import Style from './Button.module.css';

export default function Button({ type, children, ...rest }) {
  return (
    <Link { ...rest }>
      <button
        className={ `${Style[type]} ${Style.button}` }
      >
        {children}
      </button>
    </Link>
  );
}
