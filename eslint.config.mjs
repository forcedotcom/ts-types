import tsconfigs from 'eslint-config-salesforce-typescript';

const configs = [
  ...tsconfigs,
  {
    rules: {
      // Define convenient alias types
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/ban-types': 'off',
    },
  },
];

export default configs;
