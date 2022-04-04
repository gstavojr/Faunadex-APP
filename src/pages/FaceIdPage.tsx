import { useRef, FC } from 'react';
import WebCam from 'react-webcam';

import { motion } from 'framer-motion';

interface Props {
  onTakePicture: (picture: string) => void;
}

export const FacePage: FC<Props> = ({ onTakePicture }) => {
  const camRef = useRef<any>(null);

  const takePicture = () => {
    // console.log(camRef.current.getScreenshot());
    onTakePicture(camRef.current.getScreenshot() as string);
  };

  return (
    <motion.div
      layout
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <WebCam width={200} ref={camRef} />
      <button className="btn btn-primary mt-3" onClick={takePicture}>
        Login
      </button>
    </motion.div>
  );
};
