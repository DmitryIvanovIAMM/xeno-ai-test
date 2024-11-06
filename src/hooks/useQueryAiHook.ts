'use client';

import { useContext } from 'react';
import { ChatAiStateContext } from '@/Components/ChatAiStateContextInterface';
import { ChatAiHistory, Communicator } from '@/Interfaces/interfaces';

export const useQueryAiHook = () => {
  const { chatAiState, setChatAiState } = useContext(ChatAiStateContext);

  const sendAIQuery = async () => {
    const yourMessageHistory: ChatAiHistory = {
      message: chatAiState.currentInput,
      time: new Date(),
      communicator: Communicator.You,
    };
    setChatAiState({
      ...chatAiState,
      currentInput: '',
      history: [...chatAiState.history, yourMessageHistory],
      isQuerying: true,
    });

    try {
      const response = await Promise.resolve({ output: 'Mocked ChatGPT response' });
      setChatAiState({
        currentInput: '',
        history: [
          ...chatAiState.history,
          {
            message: response.output,
            time: new Date(),
            communicator: Communicator.ChatGPT,
          },
        ],
        isQuerying: false,
      });
    } catch (error) {
      setChatAiState({
        ...chatAiState,
        error: (error as string) || 'Failed to query AI',
      });
    } finally {
      setChatAiState({
        ...chatAiState,
        isQuerying: false,
      });
    }
  };

  return { chatAiState, setChatAiState, sendAIQuery };
};
