import 'openai/shims/node';
import OpenAI from 'openai';
import { mockedChatGptResponses } from '@/openai/mockedChatGptReaponces.';

const client = process.env['OPENAI_API_KEY']
  ? new OpenAI({
      apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
    })
  : null;

export const queryChatGPT = async (
  query: string,
  useMockedResponses = true
): Promise<string | null> => {
  if (!client) {
    if (useMockedResponses) {
      return Promise.resolve(
        mockedChatGptResponses[Math.floor(Math.random() * mockedChatGptResponses.length)]
      );
    }
    return Promise.reject('OpenAI client not initialized');
  }

  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: 'user', content: query }],
    model: 'gpt-3.5-turbo',
  };
  const chatCompletion: OpenAI.Chat.ChatCompletion = await client.chat.completions.create(params);
  return chatCompletion.choices[0].message.content;
};
