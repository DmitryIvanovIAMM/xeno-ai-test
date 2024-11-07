'use client';

import { useQueryAiHook } from '@/hooks/useQueryAiHook';
import styles from './chat-history.module.css';
import { Communicator } from '@/Interfaces/interfaces';
import { Box } from '@mui/system';
import { useEffect, useRef } from 'react';

const ChatHistory = () => {
  const { chatAiState } = useQueryAiHook();
  const divRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    divRef?.current?.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div className={styles.container}>
      <>
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
        <div ref={divRef} />
      </>
    </div>
  );
};
export default ChatHistory;
