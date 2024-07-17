import { useContext } from 'react';
import Style from './Form.module.css';
import { VideoContext } from '@/context/VideoContext';

export default function Form({ type, ...rest }) {
  const { video, onChange } = useContext(VideoContext);

  return (
    <form
      className={ Style[type] }
      onSubmit={ (e) => e.preventDefault() }
      { ...rest }
    >
      <label>
        Titulo

        <input
          name="titulo"
          value={ video.titulo }
          onChange={ onChange }
          type="text"
        />
      </label>
      <label>
        Categoria

        <select
          name="categoria"
          value={ video.categoria }
          onChange={ onChange }
        >
          <option value="frontend">frontend</option>
          <option value="backend">backend</option>
          <option value="inovacao">Inovação</option>
          <option value="gestao">Gestão</option>
        </select>
      </label>
      <label>
        Imagem

        <input
          name="imagem"
          value={ video.imagem }
          onChange={ onChange }
          type="text"
        />
      </label>
      <label>
        Vídeo

        <input
          name="video"
          value={ video.video }
          onChange={ onChange }
          type="text"
        />
      </label>
      <label>
        Descrição

        <textarea
          name="descricao"
          value={ video.descricao }
          onChange={ onChange }
        />
      </label>
    </form>
  );
}
