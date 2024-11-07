'use client';

import { useContext } from 'react';
import { ChatAiStateContext } from '@/components/AiChat/ChatAiStateContextInterface';
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

  const setAllowMockResponses = (value: boolean) => {
    setChatAiState((currentState) => ({
      ...currentState,
      allowMockResponses: value,
    }));
  };

  const sendAIQuery = async () => {
    console.log('sendAIQuery().  currentInput: ', chatAiState.currentInput);

    const yourMessageHistory: ChatAiHistory = {
      message: chatAiState.currentInput,
      time: new Date(),
      communicator: Communicator.You,
    };

    try {
      const response = await queryChatGPT(chatAiState.currentInput, chatAiState.allowMockResponses);
      console.log('response: ', response);
      const aiMessageHistory: ChatAiHistory = {
        message: response ?? 'No response from AI',
        time: new Date(),
        communicator: Communicator.ChatGPT,
      };
      setChatAiState((currentState) => ({
        ...currentState,
        currentInput: '',
        history: [...currentState.history, yourMessageHistory, aiMessageHistory],
        isQuerying: false,
        error: undefined,
      }));
    } catch (error) {
      console.log('error: ', error);
      setChatAiState((currentState) => ({
        ...currentState,
        error: (error as string) || 'Failed to query AI',
      }));
    } finally {
      setChatAiState((currentState) => ({
        ...currentState,
        isQuerying: false,
      }));
    }
  };

  return { chatAiState, setChatAiState, sendAIQuery, setInputValue, setAllowMockResponses };
};
