import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { motion } from 'framer-motion';
import { PreviewImage2 } from '../components/PreviewImage2';
import { getToBase64 } from '../helpers/user';
import { useAppSelector } from '../hooks/useRedux';
import { startLoadingDetectText, translateClear } from '../redux/actions/translate';

export const DetectTextPage = () => {
  const { text } = useAppSelector((state) => state.translate);
  const { loading } = useAppSelector((state) => state.ui);
  const [photo, setPhoto] = useState<string>('');
  const dispatch = useDispatch();

  const onChangePhoto = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      dispatch(translateClear());
      const photoBase64 = await getToBase64(e.target.files[0]);
      setPhoto(photoBase64 as string);
      dispatch(startLoadingDetectText(e.target.files[0]));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(translateClear());
    };
  }, [dispatch]);

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="dash-main-container mt-5 p-1"
    >
      <h2
        className="name-title texto-cententer text-profile mb-5"
        style={{
          border: 'none',
        }}
      >
        <i className="fa-solid fa-image me-3"></i>
        Reconocer Texto
      </h2>
      <div className="profile-container">
        <div className="image-profile">
          <h4>Foto</h4>
          <PreviewImage2 photoBase64={photo} className="image-perfile" />
        </div>
        <div className="text-inputs-profile">
          <div className="input-group-pet">
            <label className="label-pet">Foto</label>
            <input
              type="file"
              onChange={onChangePhoto}
              accept="image/*"
              className="input-pet-file mb-2"
            />

            <div className="text-traducir mt-3">
              <h4>
                <i className="fa-solid fa-pencil me-2"></i>
                Texto reconocido
              </h4>
              {text ? (
                <motion.p
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                >
                  {text}
                </motion.p>
              ) : (
                <p>{loading ? 'Cargando...' : 'Agregue un foto'} </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
