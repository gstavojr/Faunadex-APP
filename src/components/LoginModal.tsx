import { FormEvent, useRef } from 'react';

import Modal from 'react-modal';
import { motion } from 'framer-motion';
import WebCam from 'react-webcam';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { uiCloseLoginModal } from '../redux/actions/ui';
import { useAppSelector } from '../hooks/useRedux';
import { startLoginFaceId } from '../redux/actions/auth';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const LoginModal = () => {
  const dispatch = useDispatch();
  const camRef = useRef<any>(null);
  const { modalLoginOpen } = useAppSelector((state) => state.ui);

  const { username, onChange, formData } = useForm({
    username: '',
    photo: '',
  });

  const closeModal = () => {
    dispatch(uiCloseLoginModal());
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData.photo = camRef.current.getScreenshot() as string;
    dispatch(startLoginFaceId(formData.username, formData.photo));
    closeModal();
  };

  return (
    <Modal
      isOpen={modalLoginOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <motion.div
        className="face-id-title"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <h1>
          Login <i className="fa-solid fa-face-smile-wink ms-1"></i>
        </h1>
      </motion.div>
      <motion.form
        noValidate
        onSubmit={onSubmit}
        className="face-id-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="camara-face-id">
          <WebCam width={200} ref={camRef} screenshotFormat="image/png" />
        </div>
        <div className="input-group-pet face-inputs">
          <label className="label-pet">Usuario</label>
          <input
            type="text"
            className="input-pet"
            placeholder="Ingrese el usuario"
            value={username}
            onChange={onChange}
            name="username"
          />
          <button className="btn btn-success mt-3" type="submit">
            Login
          </button>
        </div>
      </motion.form>
      {/* Comunicacion entre componentes hijo hacia al padre */}
      {/* {isOpen && <FacePage onTakePicture={(picture) => onClickPicture(picture)} />} */}
    </Modal>
  );
};
