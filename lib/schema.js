import actionsSchema from './actions/schema';

export default {
  type: 'object',
  properties: {
    bluprint: { type: 'string' },
    name: { type: 'string' },
    category: { type: 'string' },
    actions: actionsSchema,
    parts: {
      type: 'object',
      patternProperties: {
        '^.+$': {
          type: 'array',
          items: { type: 'string' },
          minItems: 1,
        },
        additionalProperties: false,
      },
    },
    mergeJson: {
      type: 'boolean',
    },
  },
  required: ['bluprint', 'name', 'category', 'actions'],
};
