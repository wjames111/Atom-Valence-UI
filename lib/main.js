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

  let colorsAdded = [
   ['wills-theme-ui.colors.customAccent', 'wills-theme-ui.colors.customAccent', 'color', '#c5c47c', 'wills-theme-ui.colors.accentColor'],
   ['wills-theme-ui.colors.accentColor', 'wills-theme-ui.colors.customAccent', 'color', '#c5c47c', 'wills-theme-ui.colors.accentColor'],
   ['wills-theme-ui.colors.customCaret', 'wills-theme-ui.colors.customCaret', 'caret', '#d56f3e', 'wills-theme-ui.colors.colorCaret'],
   ['wills-theme-ui.colors.colorCaret', 'wills-theme-ui.colors.customCaret', 'caret', '#d56f3e', 'wills-theme-ui.colors.colorCaret'],
  ]

      //
      // atom.config.onDidChange('wills-theme-ui.colors.customAccent', ({newValue, oldValue}) => {
      //     toggleColor2('wills-theme-ui.colors.customAccent', 'color', '#c5c47c', 'wills-theme-ui.colors.accentColor') })
      //
      // atom.config.onDidChange('wills-theme-ui.colors.accentColor', ({newValue, oldValue}) => {
      //     toggleColor2('wills-theme-ui.colors.customAccent', 'color', '#c5c47c', 'wills-theme-ui.colors.accentColor') })
      //
      //
      // atom.config.onDidChange('wills-theme-ui.colors.customCaret', ({newValue, oldValue}) => {
      //     toggleColor2('wills-theme-ui.colors.customCaret', 'caret', '#d56f3e', 'wills-theme-ui.colors.colorCaret') })
      //
      // atom.config.onDidChange('wills-theme-ui.colors.colorCaret', ({newValue, oldValue}) => {
      //     toggleColor2('wills-theme-ui.colors.customCaret', 'caret', '#d56f3e', 'wills-theme-ui.colors.colorCaret') })


colorsAdded.forEach(name => {
  atom.config.onDidChange(name[0], ({newValue, oldValue}) => {
    changeColor(name[1], name[2], name[3], name[4])
  })
})



      Object.keys(classNames).forEach(className => (
              toggleClassName(className, classNames[className])),
          );
    },

    deactivate() {
    alert('no')
    },
};


let content = [ '@color-setting: #c5c47c;', '@caret-setting: #d56f3e;' ]


function changeColor(toggled, prop, defVal, settingVal) {
  alert(toggled)
  let customEnabled2 = atom.config.get(toggled)? write2File(prop, defVal) : write2File(prop, atom.config.get(settingVal))



function write2File(prop, data) {
  let property = '@' + prop + '-setting: ' + data + ';';
  let newRe = new RegExp(`${prop}-setting`)
  // content.forEach((oldProp) => { if(newRe.test(oldProp)) { content.filter(oldProp) } else { '' } })
  let newContent = content.filter((oldProp) => { return !newRe.test(oldProp) })
  newContent.push(property)

  fs.writeFile(`${__dirname}/../styles/colorSetting.less`, newContent.join(" "), 'utf8', (error) => {
    if (error) {
      return 'failed to update color settings.'
    }
  })
}
}



// function toggleColor(value) {
//   // #d56f3e
// let customEnabled = atom.config.get('wills-theme-ui.colors.customAccent')? writeFile('#c5c47c') : writeFile(value)
//
// function writeFile(data){
//   let color = '@color-setting: ' + data + ';';
//     fs.writeFile(`${__dirname}/../styles/colorSetting.less`, color, 'utf8', (error) => {
//       if (error) {
//         return 'failed to update color settings'
//       }
//     // atom.reload() put back when not in dev mode
//     })
//   }
// }
