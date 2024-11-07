'use client';

import { useQueryAiHook } from '@/hooks/useQueryAiHook';
import { Button, TextField } from '@mui/material';
import styles from './chat-input.module.css';

const ChatInput = () => {
  const { chatAiState, sendAIQuery, setInputValue } = useQueryAiHook();
  console.log('ChatInput(). chatAiState: ', chatAiState);

  return (
    <div className={styles.container}>
      <TextField
        id='outlined-multiline-static'
        label='Put question here: '
        multiline
        rows={3}
        fullWidth={true}
        value={chatAiState.currentInput}
        margin='dense'
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(event.target.value);
        }}
        disabled={chatAiState.isQuerying}
      />
      <div className={styles.button}>
        <Button
          variant='contained'
          onClick={sendAIQuery}
          disabled={chatAiState.isQuerying || chatAiState.currentInput.length === 0}
        >
          Send query
        </Button>
      </div>
    </div>
  );
};
export default ChatInput;
