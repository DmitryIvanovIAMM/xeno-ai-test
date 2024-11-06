'use client';

import ChatInput from '@/Components/ChatInput';
import ChatHistory from '@/Components/ChatHistory';
import React from 'react';
import { defaultChatAiState } from '@/Interfaces/interfaces';
import { ChatAiStateContext } from '@/Components/ChatAiStateContextInterface';

export default function AiChat() {
  const [chatAiState, setChatAiState] = React.useState(defaultChatAiState);

  return (
    <ChatAiStateContext.Provider value={{ chatAiState, setChatAiState }}>
      <h1>AI Chat</h1>
      <ChatHistory />
      <ChatInput />
    </ChatAiStateContext.Provider>
  );
}
