import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useRedux';
import { Photo } from '../interfaces/interfaces';
import { activePhoto } from '../redux/actions/photo';
import { useNavigate } from 'react-router-dom';
import { MyBadges } from './MyBadges';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const MyCarousel = () => {
  const { photos, photoByLabel, initPhotos } = useAppSelector((state) => state.photo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = (photo: Photo) => {
    dispatch(activePhoto(photo));
    navigate('/photo/detail');
  };

  return (
    <Carousel responsive={responsive} infinite={true}>
      {initPhotos
        ? photos.map((p) => (
            <div
              style={{ cursor: 'pointer' }}
              key={p.id}
              className="corrusel-info"
              onClick={() => onClick(p)}
            >
              <img
                src={`https://practice1-g5-images.s3.amazonaws.com/${p.url}`}
                alt={p.name}
                key={p.id}
                className="carrusel-img"
              />
              <p>{p.name}</p>
              <MyBadges labels={p.labels} />
            </div>
          ))
        : photoByLabel.map((p) => (
            <div
              style={{ cursor: 'pointer' }}
              key={p.id}
              className="corrusel-info"
              onClick={() => onClick(p)}
            >
              <img
                src={`https://practice1-g5-images.s3.amazonaws.com/${p.url}`}
                alt={p.name}
                key={p.id}
                className="carrusel-img"
              />
              <p>{p.name}</p>
              <MyBadges labels={p.labels} />
            </div>
          ))}
    </Carousel>
  );
};
