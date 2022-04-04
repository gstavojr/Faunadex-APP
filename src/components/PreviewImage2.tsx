import { FC } from 'react';

interface Props {
  photoBase64?: string;
  className?: string;
}
export const PreviewImage2: FC<Props> = ({ photoBase64, className }) => {
  const image = photoBase64 ? photoBase64 : '../assets/user.png';
  return (
    <div className={`preview-img  ${className || ''}`}>
      <img src={image} alt="" width="150px" />
    </div>
  );
};
