import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

const req = require.context('../src/stories', true, /\.stories\.tsx$/);

function loadStories() {
  // require('../src/stories');
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
