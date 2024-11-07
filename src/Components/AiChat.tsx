'use client';

import ChatInput from '@/Components/ChatInput/ChatInput';
import ChatHistory from '@/Components/ChatHistory/ChatHistory';
import React from 'react';
import { defaultChatAiState } from '@/Interfaces/interfaces';
import { ChatAiStateContext } from '@/Components/ChatAiStateContextInterface';

export default function AiChat() {
  const [chatAiState, setChatAiState] = React.useState(defaultChatAiState);

  return (
    <ChatAiStateContext.Provider value={{ chatAiState, setChatAiState }}>
      <ChatHistory />
      <ChatInput />
    </ChatAiStateContext.Provider>
  );
}
