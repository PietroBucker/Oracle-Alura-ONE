import Style from './NovoVideo.module.css';
import Form from '../../components/Form';
import Button from '../../components/Button';

export default function NovoVideo() {
  return (
    <div className={ Style.container }>
      <div className={ Style.containerText }>
        <h1>Novo vídeo</h1>
        <p>Preencha os campos abaixo para adicionar um novo vídeo.</p>
      </div>
      <h2>Criar Card</h2>
      <Form type="novo-video" />
      <div className={ Style.buttonContainer }>
        <Button type="blue" textColor="white">Guardar</Button>
        <Button>Limpar</Button>
      </div>
    </div>
  );
}
