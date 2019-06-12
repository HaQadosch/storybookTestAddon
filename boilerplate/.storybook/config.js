import { configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { addDecorator } from '@storybook/react/dist/client/preview';

addDecorator(withA11y);

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
