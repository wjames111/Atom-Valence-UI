'use babel';


import toggleClassName from './toggler';
import './user-interface';



const classNames = {
    // Fonts
    'hide-tab-bar': atom.config.get('atom-material-ui.ui.hideTabBar'),

}




export default {
    activate() {
      alert('hello')
      Object.keys(classNames).forEach(className => (
              toggleClassName(className, classNames[className])),
          );

    },

    deactivate() {
    alert('no')
    },
};
