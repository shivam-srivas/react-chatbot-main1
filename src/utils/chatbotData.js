export const CONVERSATION_START = ['Want to talk About SciAstra','Other'];
export const CONVERSATION_END = 'Goodbye';

export const ASSISTANT_QUESTIONS = ['May i Know your name?'];

export const SCI_OPTIONS = [
  {
    id: 1,
    option: 'What is Sciastra?',
    response: 'Sciastra',
    description: 'Sciastra is a [technology, concept, or term] that [provide a concise definition].',
    reference: 'https://www.sciastra.com/',
  },
  {
    id: 2,
    option: 'What are the key features of Sciastra technology?',
    response: 'Features of Sciastra technology',
    description: 'Sciastra is a [technology, concept, or term] that [provide a concise definition].',
    reference: 'https://www.sciastra.com/',
  },
  {
    id: 3,
    option: 'Can you explain the underlying principles behind Sciastra?',
    response: 'Principles behind Sciastra',
    description: 'Sciastra is a [technology, concept, or term] that [provide a concise definition].',
    reference: 'https://www.sciastra.com/',
  },
  {
    id: 4,
    option: 'Are there any notable challenges associated with implementing Sciastra?',
    response: 'Challenges associated with implementing Sciastra',
    description: 'Sciastra is a [technology, concept, or term] that [provide a concise definition].',
    reference: 'https://www.sciastra.com/',
  },
  {
    id: 5,
    option: 'What are the potential future developments in the field of Sciastra',
    response: ' Sciastra',
    description: 'Sciastra is a [technology, concept, or term] that [provide a concise definition].',
    reference: 'https://www.sciastra.com/',
  },
  {
    id: 6,
    option: 'How can businesses benefit from integrating Sciastra into their operations?',
    response: 'Integrating Sciastra',
    description: 'Sciastra is a [technology, concept, or term] that [provide a concise definition].',
    reference: 'https://www.sciastra.com/',
  },
  {
    id: 7,
    option: 'Is there ongoing research or projects related to Sciastra?',
    response: ' Research or Projects related to Sciastra?',
    description: 'Sciastra is a [technology, concept, or term] that [provide a concise definition].',
    reference: 'https://www.sciastra.com/',
  },
  {
    id: 8,
    option: 'Help',
    response: 'I need help',
    description: 'If you have questions or need assistance regarding loans, we\'re here to help. Our team of experts can provide information about different types of loans, eligibility criteria, and the application process. Feel free to reach out to us for personalized assistance.',
    reference: 'https://www.sciastra.com/contact/',
  }
];

export const HELP_START_OPTIONS = CONVERSATION_START.map((option, index) => ({
  id: index + 1,
  option,
  response: option,
  description: ASSISTANT_QUESTIONS[index],
}));
