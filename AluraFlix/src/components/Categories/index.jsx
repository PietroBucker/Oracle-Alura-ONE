import Style from './Categories.module.css';
import Tag from '../Tag';
import Card from '../Card';

export default function Categories() {
  return (
    <div className={ Style.container }>
      <Tag>frontend</Tag>
      <Card />
    </div>
  );
}

const objetoPrincipal = {
  titulo: 'Titulo',
  descricao: 'Descrição',
  imagem: 'Imagem',
  categoria: 'Categoria',
  video: 'Video',
};

const objetoTeste = {
  frontend: [],
  backend: [],
};
// usar o objeto teste como estado para renderizar os cards nas respectivas categorias
// usar a chave do obj teste como referencia para buscas de exclusão e adição de cards

// Criar contexto para:
// - exibir o video em destaque no banner
// - exibir os video nas categorias
