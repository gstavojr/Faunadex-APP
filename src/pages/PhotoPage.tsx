import { useAppSelector } from '../hooks/useRedux';

import { MyLabel } from '../components/MyLabel';
import { MyCarousel } from '../components/MyCarousel';
import { motion } from 'framer-motion';
import { startLoadingPhotos } from '../redux/actions/photo';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const PhotoPage = () => {
  const { labels } = useAppSelector((state) => state.label);
  const dispatch = useDispatch();

  const onClickUpdate = () => {
    dispatch(startLoadingPhotos());
  };

  useEffect(() => {
    dispatch(startLoadingPhotos());
    console.log('load photos');
  }, [dispatch]);

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      layout
      className="photo-main-container"
    >
      <div className="photo-albums-container mb-2">
        <MyLabel
          text="Mis fotos"
          classStyle="mb-1 text-album-photo"
          onUpdatePhotos={() => onClickUpdate()}
        />
        {labels.map((label) => (
          <MyLabel
            key={label.id}
            text={label.name}
            classStyle="mb-1 text-album-photo"
            label={label}
          />
        ))}
      </div>
      <div className="photo-container-carrusel">
        <h2
          className="name-title texto-cententer text-profile mb-1"
          style={{
            border: 'none',
          }}
        >
          <i className="fa-solid fa-image me-2"></i>
          Mis Fotos
        </h2>
        <div className="carrusel">
          <MyCarousel />
        </div>
      </div>
    </motion.div>
  );
};
