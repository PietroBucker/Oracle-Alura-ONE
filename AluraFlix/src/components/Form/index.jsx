import Style from './Form.module.css';

export default function Form({ type }) {
  return (
    <form className={ Style[type] }>
      <label>
        Titulo

        <input type="text" />
      </label>
      <label>
        Categoria

        <select>
          <option value="frontend">frontend</option>
          <option value="backend">backend</option>
        </select>
      </label>
      <label>
        Imagem

        <input type="text" />
      </label>
      <label>
        Vídeo

        <input type="text" />
      </label>
      <label>
        Descrição

        <textarea />
      </label>
    </form>
  );
}
