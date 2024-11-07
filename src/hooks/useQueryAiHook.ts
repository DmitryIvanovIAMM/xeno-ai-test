'use client';

import { useContext } from 'react';
import { ChatAiStateContext } from '@/Components/ChatAiStateContextInterface';
import { ChatAiHistory, Communicator } from '@/Interfaces/interfaces';

export const useQueryAiHook = () => {
  const { chatAiState, setChatAiState } = useContext(ChatAiStateContext);

  const setInputValue = (value: string) => {
    setChatAiState((currentState) => ({
      ...currentState,
      currentInput: value,
    }));
  };

  const sendAIQuery = async () => {
    console.log('sendAIQuery().  currentInput: ', chatAiState.currentInput);

    const yourMessageHistory: ChatAiHistory = {
      message: chatAiState.currentInput,
      time: new Date(),
      communicator: Communicator.You,
    };
    setChatAiState((currentState) => ({
      ...currentState,
      currentInput: '',
      history: [...currentState.history, yourMessageHistory],
      isQuerying: true,
    }));

    try {
      const response = await Promise.resolve({ output: 'Mocked ChatGPT response' });
      const aiMessageHistory: ChatAiHistory = {
        message: response.output,
        time: new Date(),
        communicator: Communicator.ChatGPT,
      };
      setChatAiState((currentState) => ({
        currentInput: '',
        history: [...currentState.history, aiMessageHistory],
        isQuerying: false,
        error: undefined,
      }));
    } catch (error) {
      setChatAiState({
        ...chatAiState,
        error: (error as string) || 'Failed to query AI',
      });
    } finally {
      setChatAiState((currentState) => ({
        ...currentState,
        isQuerying: false,
      }));
    }
  };

  return { chatAiState, setChatAiState, sendAIQuery, setInputValue };
};
