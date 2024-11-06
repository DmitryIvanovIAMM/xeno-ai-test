'use client';

import { createContext } from 'react';
import { ChatAiState, defaultChatAiState } from '@/Interfaces/interfaces';

export interface ChatAiStateContextInterface {
  chatAiState: ChatAiState;
  setChatAiState: (chatAiState: ChatAiState) => void;
}

export const ChatAiStateContext = createContext<ChatAiStateContextInterface>({
  chatAiState: defaultChatAiState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setChatAiState: (chatAiState: ChatAiState) => chatAiState,
});
