'use client';

import ChatInput from '@/components/ChatInput/ChatInput';
import ChatHistory from '@/components/ChatHistory/ChatHistory';
import React from 'react';
import { defaultChatAiState } from '@/Interfaces/interfaces';
import { ChatAiStateContext } from '@/components/AiChat/ChatAiStateContextInterface';

export default function AiChat() {
  const [chatAiState, setChatAiState] = React.useState(defaultChatAiState);

  return (
    <ChatAiStateContext.Provider value={{ chatAiState, setChatAiState }}>
      <ChatHistory />
      <ChatInput />
    </ChatAiStateContext.Provider>
  );
}
