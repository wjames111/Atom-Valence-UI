'use babel';
import toggleClassName from './toggler';






const classNames = {
    'tab-bar__active': atom.config.get('wills-theme-ui.colors.toggleTabBar'),
    'directory-highlight__active': atom.config.get('wills-theme-ui.colors.directoryIndicator'),
    'match-syntaxTheme__active': atom.config.get('wills-theme-ui.colors.matchSyntaxTheme'),
    'font-size__active': atom.config.get('wills-theme-ui.colors.fontSize'),
}




export default {
    activate() {

let toot = atom.workspace.getElement('atom-text-editor')
  let paneElement = atom.views.getView(atom.workspace.getActivePane())
alert(toot.innerHTML)


  atom.config.onDidChange( 'wills-theme-ui.colors.toggleTabBar', ({newValue, oldValue}) =>{
  toggleClassName('tab-bar__active', atom.config.get('wills-theme-ui.colors.toggleTabBar')) })

  atom.config.onDidChange( 'wills-theme-ui.colors.directoryIndicator', ({newValue, oldValue}) =>{
  toggleClassName('directory-highlight__active', atom.config.get('wills-theme-ui.colors.directoryIndicator')) })

  atom.config.onDidChange( 'wills-theme-ui.colors.matchSyntaxTheme', ({newValue, oldValue}) =>{
  toggleClassName('match-syntaxTheme__active', atom.config.get('wills-theme-ui.colors.matchSyntaxTheme')) })

  atom.config.onDidChange( 'wills-theme-ui.colors.fontSize', ({newValue, oldValue}) =>{
  toggleClassName('font-size__active', atom.config.get('wills-theme-ui.colors.fontSize')) })


      Object.keys(classNames).forEach(className => (
              toggleClassName(className, classNames[className])),
          );


    },

    deactivate() {
    alert('no')
    },
};
