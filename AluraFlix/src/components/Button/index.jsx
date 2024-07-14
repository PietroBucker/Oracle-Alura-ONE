import { Link } from 'react-router-dom';
import Style from './Button.module.css';

export default function Button({ type = 'white', textColor, children, ...rest }) {
  return (
    <Link { ...rest }>
      <button
        className={ `${Style[type]} ${Style.button}` }
        style={ { color: `${textColor}` } }
      >
        {children}
      </button>
    </Link>
  );
}
