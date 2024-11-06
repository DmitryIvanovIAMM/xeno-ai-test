export enum Communicator {
  ChatGPT = 'ChatGPT',
  You = 'You',
}
export interface ChatAiHistory {
  message: string;
  time: Date;
  communicator: Communicator;
}
export interface ChatAiState {
  currentInput: string;
  history: ChatAiHistory[];
  isQuerying: boolean;
  error?: string;
}
export const defaultChatAiState: ChatAiState = {
  currentInput: '',
  history: [],
  isQuerying: false,
  error: undefined,
};
