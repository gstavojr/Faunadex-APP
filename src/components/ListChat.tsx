import { FC } from 'react';

import { Message } from '../interfaces/interfaces';
import { motion } from 'framer-motion';

interface Props {
  chatList: Message[];
}

export const ListChat: FC<Props> = ({ chatList }) => {
  return (
    <div className="container-chat">
      {chatList.map((msg, i) => (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className={`msg-display-${msg.source}`}
          key={i}
        >
          <div className={`message ${msg.source}`}>
            <p>{msg.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
