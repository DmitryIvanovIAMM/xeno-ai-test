'use client';

import { useQueryAiHook } from '@/hooks/useQueryAiHook';
import styles from './chat-history.module.css';
import { Paper } from '@mui/material';
import { Communicator } from '@/Interfaces/interfaces';
import { Box } from '@mui/system';

const ChatHistory = () => {
  const { chatAiState } = useQueryAiHook();

  return (
    <div className={styles.container}>
      <div className={styles.history}>
        {chatAiState.history.map((item, index) => (
          <div
            className={item.communicator === Communicator.You ? styles.leftcard : styles.rightcard}
            key={index}
          >
            <Box sx={{ padding: '10px' }} className={styles.message}>
              <div className={styles.time}>
                {item.communicator === Communicator.You
                  ? `You ask at ${item.time.toLocaleTimeString()}:`
                  : `ChatGPT answers at ${item.time.toLocaleTimeString()}:`}
              </div>
              <hr />
              <div>{item.message}</div>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ChatHistory;
