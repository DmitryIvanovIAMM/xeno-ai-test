'use client';

import { useQueryAiHook } from '@/hooks/useQueryAiHook';

const ChatHistory = () => {
  const { chatAiState } = useQueryAiHook();

  return <div>Chat history here</div>;
};
export default ChatHistory;
