'use client';

import { useContext } from 'react';
import { ChatAiStateContext } from '@/components/ChatAiStateContextInterface';
import { ChatAiHistory, Communicator } from '@/Interfaces/interfaces';
import { queryChatGPT } from '@/openai/openai';

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
      const response = await queryChatGPT(chatAiState.currentInput);
      console.log('response: ', response);
      const aiMessageHistory: ChatAiHistory = {
        message: response ?? 'No response from AI',
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
      console.log('error: ', error);
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
