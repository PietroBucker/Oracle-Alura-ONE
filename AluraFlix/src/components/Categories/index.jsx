import { useContext } from 'react';
import Style from './Categories.module.css';
import Tag from '../Tag';
import Card from '../Card';
import { VideoContext } from '../../context/VideoContext';

export default function Categories() {
  const { videos, categories } = useContext(VideoContext);
  return (
    <>
      {categories.map((cat) => (
        <div key={ cat } className={ Style.container }>
          {videos[cat].length === 0 ? '' : <Tag>{cat}</Tag>}
          <Card videos={ videos[cat] } />
        </div>
      ))}
    </>
  );
}

const objetoPrincipal = {
  id: 'id',
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
