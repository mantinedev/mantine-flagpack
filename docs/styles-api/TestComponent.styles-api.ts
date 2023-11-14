import type { TestComponentFactory } from 'mantine-extension-template';
import type { StylesApiData } from '../components/styles-api.types';

export const TestComponentStylesApi: StylesApiData<TestComponentFactory> = {
  selectors: {
    root: 'Root element',
  },

  vars: {
    root: {
      '--test-component-color': 'Controls root element `background-color`',
    },
  },

  modifiers: [{ modifier: 'data-centered', selector: 'root', condition: '`centered` prop is set' }],
};
