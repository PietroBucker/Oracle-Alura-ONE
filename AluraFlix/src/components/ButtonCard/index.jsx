import Style from './ButtonCard.module.css';

export default function ButtonCard({ icon, children }) {
  return (
    <button className={ Style.container }>
      <img src={ icon } alt={ children } />
      <span>{children}</span>
    </button>
  );
}
