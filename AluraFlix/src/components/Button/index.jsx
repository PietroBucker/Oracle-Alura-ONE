import Style from './Button.module.css';

export default function Button({ type, children }) {
  return (
    <button className={ Style[type] }>{children}</button>
  );
}
