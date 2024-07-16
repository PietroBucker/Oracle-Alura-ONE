import Style from './NovoVideo.module.css';
import Form from '../../components/Form';
import Button from '../../components/Button';
import { useConnection } from '../../components/hook/useConnection';

export default function NovoVideo() {
  const { saveVideo, cleanInput } = useConnection();
  return (
    <div className={ Style.container }>
      <div className={ Style.containerText }>
        <h1>Novo vídeo</h1>
        <p>Preencha os campos abaixo para adicionar um novo vídeo.</p>
      </div>
      <h2>Criar Card</h2>
      <Form type="novo-video" />
      <div className={ Style.buttonContainer }>
        <Button
          onClick={ saveVideo }
          type="blue"
          textColor="white"
        >
          Guardar
        </Button>
        <Button
          onClick={ cleanInput }
        >
          Limpar
        </Button>
      </div>
    </div>
  );
}
