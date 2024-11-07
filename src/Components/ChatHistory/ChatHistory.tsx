'use client';

import { useQueryAiHook } from '@/hooks/useQueryAiHook';
import styles from './chat-history.module.css';

const ChatHistory = () => {
  const { chatAiState } = useQueryAiHook();

  return (
    <div className={styles.container}>
      <div className={styles.history}>
        {chatAiState.history.map((item, index) => (
          <div key={index}>
            <div className={styles.message}>{item.message}</div>
            <div className={styles.time}>{item.time.toLocaleTimeString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ChatHistory;
