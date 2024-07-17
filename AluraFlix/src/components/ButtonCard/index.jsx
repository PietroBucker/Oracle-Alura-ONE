import Style from './ButtonCard.module.css';

export default function ButtonCard({ tamanho, icon, children, ...rest }) {
  return (
    <button className={ Style.container } { ...rest }>
      <img src={ icon } alt={ children } style={ { width: `${tamanho}` } } />
      <span>{children}</span>
    </button>
  );
}
