import { SCI_OPTIONS, CONVERSATION_START } from './chatbotData';
import { getNextMessageId } from './messageCounter';

export const createNewAssistantMessage = (content, options = null, reference = null) => {
  const newMessage = {
    id: getNextMessageId(),
    content: content || '',
    role: 'assistant',
  };

  if (options) {
    newMessage.options = options;
  }
  if (reference) {
    newMessage.reference = reference;
  }

  return newMessage;
};

export const createNewUserMessage = (content) => {
  const newMessage = {
    id: getNextMessageId(),
    content,
    role: 'user',
  };
  return newMessage;
};

export const responseConditions = [
  {
    check: (message, _) => CONVERSATION_START.includes(message),
    response: () => ({ content: 'May i Know your name?' }),
  },
  {
    check: (_, question) => question.includes('name'),
    response: (context) => ({
      content: `Welcome ${context.user}! I'm your assistant, ask me a question.`,
    }),
  },
  {
    check: (message, _) => SCI_OPTIONS.some(({ response }) => response === message),
    response: (context) => {
      const sciOption = SCI_OPTIONS.find(({ response }) => response === context.message);
      return {
        content: sciOption.description,
        reference: sciOption.reference,
      };
    },
  },
  {
    check: (message, _) => message.includes('sci'),
    response: () => ({
      content: 'Sci options:',
      options: SCI_OPTIONS,
    }),
  },
];

export const firstMessage = {
  id: getNextMessageId(),
  content: 'Hello! 👋',
  role: 'assistant',
};
