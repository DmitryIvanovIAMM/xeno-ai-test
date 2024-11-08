'use client';

import React from 'react';
import { useQueryAiHook } from '@/hooks/useQueryAiHook';
import { Button, InputAdornment, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from './chat-input.module.css';
import { AccountCircle } from '@mui/icons-material';

const ChatInput = () => {
  const { chatAiState, sendAIQuery, setInputValue } = useQueryAiHook();

  const keyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode == 13) {
      sendAIQuery();
    }
  };

  return (
    <div className={styles.container}>
      <TextField
        id='outlined-multiline-static'
        label='Put question here: '
        fullWidth={true}
        value={chatAiState.currentInput}
        margin='dense'
        size='small'
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(event.target.value);
        }}
        onKeyUp={keyPressed}
        disabled={chatAiState.isQuerying}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position='start' style={{ marginLeft: 0 }}>
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
      />
      <div className={styles.button}>
        <Button
          variant='contained'
          onClick={sendAIQuery}
          disabled={chatAiState.isQuerying || chatAiState.currentInput.length === 0}
          style={{ height: '42px', fontSize: '12px' }}
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
export default ChatInput;
