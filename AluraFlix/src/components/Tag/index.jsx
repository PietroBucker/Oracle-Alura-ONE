import Style from './Tag.module.css';

export default function Tag({ children }) {
  return (
    <h1 className={ `${Style.titulo} ${Style[children]}` }>{children}</h1>
  );
}
