import Style from './NovoVideo.module.css';
import Form from '../../components/Form';

export default function NovoVideo() {
  return (
    <div className={ Style.container }>
      <h1>Novo vídeo</h1>
      <p>Preencha os campos abaixo para adicionar um novo vídeo.</p>
      <h2>Criar Card</h2>
      <Form type="novo-video" />
    </div>
  );
}
