import '../src/main.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#1a1a1a' },
      { name: 'gray', value: '#f3f4f6' },
    ],
  },
  layout: 'padded',
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: true }],
    },
  },
};

export const decorators = [
  (Story) => {
    const wrapper = document.createElement('div');
    wrapper.style.padding = '1rem';
    wrapper.appendChild(Story());
    return wrapper;
  },
];