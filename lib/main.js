'use babel';
import toggleClassName from './toggler';






const classNames = {
    'tab-bar__active': atom.config.get('wills-theme-ui.colors.toggleTabBar'),
}




export default {
    activate() {

let toot = atom.workspace.getElement('atom-text-editor')
  let paneElement = atom.views.getView(atom.workspace.getActivePane())
alert(toot.innerHTML)


  atom.config.onDidChange( 'wills-theme-ui.colors.toggleTabBar', ({newValue, oldValue}) =>{
  toggleClassName('tab-bar__active', atom.config.get('wills-theme-ui.colors.toggleTabBar')) })

      Object.keys(classNames).forEach(className => (
              toggleClassName(className, classNames[className])),
          );


    },

    deactivate() {
    alert('no')
    },
};
