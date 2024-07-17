import React, { useContext } from 'react';
import Style from './Modal.module.css';
import Form from '../Form';
import Button from '../Button';
import ButtonCard from '../ButtonCard';
import cancel from '@/assets/cancel.svg';
import { VideoContext } from '../../context/VideoContext';
import { useConnection } from '../hook/useConnection';

export default function Modal() {
  const { isEditing, setIsEditing, cleanInput } = useContext(VideoContext);
  const { updateVideo } = useConnection();
  return (
    <>
      { isEditing && <div className={ Style.overlay } /> }
      <dialog
        className={ Style.dialog }
        open={ !!isEditing }
        onClose={ () => setIsEditing(null) }
      >
        <form className={ Style.buttonCancel } method="dialog">
          <ButtonCard icon={ cancel } />
        </form>
        <h1>editar video:</h1>
        <Form method="dialog" type="edita-video" />
        <div className={ Style.buttonContainer }>
          <Button
            type="blue"
            textColor="#2271D1"
            onClick={ () => updateVideo(isEditing) }
          >
            editar
          </Button>
          <Button onClick={ cleanInput }>limpar</Button>
        </div>
      </dialog>
    </>
  );
}
