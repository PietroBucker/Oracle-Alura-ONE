import React from 'react';
import Tag from '../Tag';

export default function Categories() {
  return (
    <div>
      <Tag>frontend</Tag>
      {/* <Card /> */}
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
//usar o objeto teste como estado para renderizar os cards nas respectivas categorias
//usar a chave do obj teste como referencia para buscas de exclusão e adição de cards