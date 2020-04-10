'use babel';

import toggleClassName from './toggle-class-name';


atom.config.observe('atom-material-ui.ui.hideTabBar', (value) => {
  alert('hello')
    toggleClassName('hide-tab-bar', value);
});

export default
