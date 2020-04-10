'use babel';

import toggleClassName from '../toggler';

atom.config.observe('atom-material-ui.ui.hideTabBar', () => {
  alert('hello')
  
});

atom.config.observe('atom-material-ui.ui.panelContrast', (value) => {
    toggleClassName('amu-panel-contrast', value);
});

atom.config.observe('atom-material-ui.ui.useAnimations', (value) => {
    toggleClassName('amu-use-animations', value);
});
