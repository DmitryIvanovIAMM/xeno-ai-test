'use client';

import ChatInput from '@/components/ChatInput/ChatInput';
import ChatHistory from '@/components/ChatHistory/ChatHistory';
import React from 'react';
import { defaultChatAiState } from '@/Interfaces/interfaces';
import { ChatAiStateContext } from '@/components/AiChat/ChatAiStateContextInterface';
import ChatOptions from '@/components/ChatOptions/ChatOptions';

export default function AiChat() {
  const [chatAiState, setChatAiState] = React.useState(defaultChatAiState);

  return (
    <ChatAiStateContext.Provider value={{ chatAiState, setChatAiState }}>
      <ChatHistory />
      <ChatOptions />
      <ChatInput />
    </ChatAiStateContext.Provider>
  );
}
