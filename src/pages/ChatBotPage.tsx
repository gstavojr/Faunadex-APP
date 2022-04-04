import { useAppSelector } from '../hooks/useRedux';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { FormMessage } from '../components/FormMessage';
import { ListChat } from '../components/ListChat';
import { startLoadingChat } from '../redux/actions/chat';

export const ChatBotPage = () => {
  const dispatch = useDispatch();
  const { messages } = useAppSelector((state) => state.chat);

  const onUserMessage = (msg: string) => {
    dispatch(startLoadingChat(msg));
  };

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
        <i className="fa-solid fa-robot me-3"></i>
        Chat Bot
      </h2>
      <div className="container-chat-main">
        <ListChat chatList={messages} />
        <FormMessage onMessageChange={(msg) => onUserMessage(msg)} />
      </div>
    </motion.div>
  );
};
