'use client';

import { useState } from 'react';
import { useQueryAiHook } from '@/hooks/useQueryAiHook';

const ChatInput = () => {
  const { chatAiState, sendAIQuery } = useQueryAiHook();

  return (
    <div>
      <input type='text' />
      <button disabled={chatAiState.isQuerying} onClick={sendAIQuery}>
        Send
      </button>
    </div>
  );
};
export default ChatInput;
