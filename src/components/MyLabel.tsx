import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/useRedux';
import { Label } from '../interfaces/interfaces';
import { activeLabel } from '../redux/actions/label';
import { addPhotosByLabel, changePhoto, initPhoto } from '../redux/actions/photo';
// import { startLoadingPhotos } from '../redux/actions/photo';

interface Props {
  text?: string;
  classStyle?: string;
  label?: Label;
  onUpdatePhotos?: () => void;
}
export const MyLabel: FC<Props> = ({ text, classStyle, label, onUpdatePhotos }) => {
  const { active } = useAppSelector((state) => state.label);
  const dispatch = useDispatch();

  const onClick = () => {
    if (label) {
      dispatch(changePhoto());
      dispatch(activeLabel(label));
      dispatch(addPhotosByLabel(label.name));
    }
    if (onUpdatePhotos) {
      dispatch(initPhoto());
      onUpdatePhotos();
    }
  };

  return (
    <div
      className={`text-album animate__animated animate__fadeIn animate__fast ${
        classStyle || ''
      } ${label && label.id === active?.id ? 'text-active' : ''}`}
      onClick={() => onClick()}
    >
      {text ? <h3>{text}</h3> : <i className="fa-solid fa-images icon-album"></i>}
    </div>
  );
};
