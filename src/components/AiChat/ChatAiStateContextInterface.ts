'use client';

import { createContext, Dispatch, SetStateAction } from 'react';
import { ChatAiState, defaultChatAiState } from '@/Interfaces/interfaces';

export interface ChatAiStateContextInterface {
  chatAiState: ChatAiState;
  setChatAiState: Dispatch<SetStateAction<ChatAiState>>;
}

const defaultChatAiStateContext: ChatAiStateContextInterface = {
  chatAiState: defaultChatAiState,
  setChatAiState: () => {},
};

export const ChatAiStateContext =
  createContext<ChatAiStateContextInterface>(defaultChatAiStateContext);
