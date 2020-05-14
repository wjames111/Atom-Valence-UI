'use babel';
import fs from 'fs'
import toggleClassName from './toggler';







const classNames = {
    'tab-bar__active': atom.config.get('wills-theme-ui.colors.toggleTabBar'),
    'directory-highlight__active': atom.config.get('wills-theme-ui.colors.directoryIndicator'),
    'match-syntaxTheme__active': atom.config.get('wills-theme-ui.colors.matchSyntaxTheme'),
    'font-size__active': atom.config.get('wills-theme-ui.colors.fontSize'),
    'file-ext-color__active': atom.config.get('wills-theme-ui.colors.extColor'),
    'settings-panel-color__active': atom.config.get('wills-theme-ui.colors.settingsPanel'),
    'animations-enabled__active': atom.config.get('wills-theme-ui.colors.animationEnabled'),
    'project-tab_sticky__active': atom.config.get('wills-theme-ui.colors.stickyEnabled'),
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

  atom.config.onDidChange( 'wills-theme-ui.colors.extColor', ({newValue, oldValue}) =>{
  toggleClassName('file-ext-color__active', atom.config.get('wills-theme-ui.colors.extColor')) })

  atom.config.onDidChange( 'wills-theme-ui.colors.settingsPanel', ({newValue, oldValue}) =>{
  toggleClassName('settings-panel-color__active', atom.config.get('wills-theme-ui.colors.settingsPanel')) })

  atom.config.onDidChange( 'wills-theme-ui.colors.animationEnabled', ({newValue, oldValue}) =>{
  toggleClassName('animations-enabled__active', atom.config.get('wills-theme-ui.colors.animationEnabled')) })

  atom.config.onDidChange( 'wills-theme-ui.colors.stickyEnabled', ({newValue, oldValue}) =>{
  toggleClassName('project-tab_sticky__active', atom.config.get('wills-theme-ui.colors.stickyEnabled')) })

  // atom.config.observe('atom-material-ui.colors.accentColor', value => toggleColor('accent-color__active', value));

  // atom.config.observe('wills-theme-ui.colors.accentColor', ({newValue, oldValue}) => {
  //     toggleColor(atom.config.get('wills-theme-ui.colors.accentColor')) })

  // atom.config.onDidChange('wills-theme-ui.colors.customAccent', ({newValue, oldValue}) => {
  //     returnColor(atom.config.get('wills-theme-ui.colors.customAccent')) })

      atom.config.onDidChange('wills-theme-ui.colors.customAccent', ({newValue, oldValue}) => {
          toggleColor(atom.config.get('wills-theme-ui.colors.accentColor')) })

      atom.config.onDidChange('wills-theme-ui.colors.accentColor', ({newValue, oldValue}) => {
          toggleColor(atom.config.get('wills-theme-ui.colors.accentColor')) })


      Object.keys(classNames).forEach(className => (
              toggleClassName(className, classNames[className])),
          );
    },

    deactivate() {
    alert('no')
    },
};






function toggleColor(value) {
let customEnabled = atom.config.get('wills-theme-ui.colors.customAccent')? writeFile('#c5c47c') : writeFile(value)

function writeFile(data){
  let color = '@color-setting: ' + data + ';';
    fs.writeFile(`${__dirname}/../styles/colorSetting.less`, color, 'utf8', (error) => {
      if (error) {
        return 'failed to update color settings'
      }
    // atom.reload() put back when not in dev mode
    })
  }
}
