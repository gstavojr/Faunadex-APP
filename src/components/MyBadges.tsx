import { FC } from 'react';
import { Label } from '../interfaces/interfaces';

interface Props {
  labels: Label[];
}

const styleBadges = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];
export const MyBadges: FC<Props> = ({ labels }) => {
  const getStyle = () => {
    const style = styleBadges[random()];
    return style;
  };

  const random = (): number => {
    return Math.round(Math.random() * (7 - 0) + 0);
  };

  return (
    <div className="container-badge">
      {labels.map((l) => (
        <span key={l.id} className={`etiqueta-badge etiqueta-${getStyle()}`}>
          {l.name}
        </span>
      ))}
    </div>
  );
};
