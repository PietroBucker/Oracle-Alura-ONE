import { useContext } from 'react';
import Style from './Categories.module.css';
import Tag from '../Tag';
import Card from '../Card';
import { VideoContext } from '../../context/VideoContext';

export default function Categories() {
  const { videos, categories, isLoading } = useContext(VideoContext);
  return (

    <div style={ { padding: '50px 50px' } }>

      {isLoading ? <div className={ Style.carregando }>Carregando...</div>
        : categories.map((cat) => (
          <div key={ cat } className={ Style.container }>
            {videos[cat].length === 0 ? '' : <Tag>{cat}</Tag>}
            <Card videos={ videos[cat] } />
          </div>
        ))}
      ;
    </div>
  );
}
