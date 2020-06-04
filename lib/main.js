'use babel';
import fs from 'fs'
import toggleClassName from './toggler';

const themeName = 'wills-theme-ui.colors.'
const classNames = {
  'tab-bar__active': themeName + 'toggleTabBar',
  'directory-highlight__active': themeName + 'directoryIndicator',
  'match-syntaxTheme__active': themeName + 'matchSyntaxTheme',
  // 'badge-border__active': themeName + 'matchSyntaxTheme',
  'font-size__active': themeName + 'fontSize',
  'file-ext-color__active': themeName + 'extColor',
  'settings-panel-color__active': themeName + 'settingsPanel',
  'animations-enabled__active': themeName + 'animationEnabled',
  'project-tab_sticky__active': themeName + 'stickyEnabled',
}

const colorsAdded = [
 themeName + 'customAccent',
 themeName + 'accentColor',
 themeName + 'customBadgeBorder',
 themeName + 'badgeColor',
 themeName + 'customCaret',
 themeName + 'caretColor',
 themeName + 'customBorder',
 themeName + 'borderColor',
]

export default {
activate() {

  Object.keys(classNames).forEach(className => (
    toggleClassName(className, atom.config.get(classNames[className]))
    ),
  );

  colorsAdded.forEach(name => {
    atom.config.onDidChange(name, ({newValue, oldValue}) => {
      changeColor()
    })
  })

  Object.keys(classNames).forEach(className => (
    atom.config.onDidChange( classNames[className], ({newValue, oldValue}) => {
      toggleClassName(className, atom.config.get(classNames[className])) })
    ),
  );
},
};

function changeColor() {
  let currentAccent = atom.config.get(themeName + 'customAccent')? 'rgba(197, 196, 124, 1)' : atom.config.get(themeName + 'accentColor');
  let currentCaret = atom.config.get(themeName + 'customCaret')? '#d56f3e' : atom.config.get(themeName + 'caretColor');
  let currentBadge = atom.config.get(themeName + 'customBadgeBorder')? 'darkcyan' : atom.config.get(themeName + 'badgeColor');
  let currentBorder = atom.config.get(themeName + 'customBorder')? '#212630' : atom.config.get(themeName + 'borderColor');

  let content = [ `@color-setting: ${currentAccent};`, `@caret-setting: ${currentCaret};`, `@badge-border-color: ${currentBadge};`, `@main-border-setting: ${currentBorder};`]

  fs.writeFile(`${__dirname}/../styles/colorSetting.less`, content.join("\r\n"), 'utf8', (error) => {
    if (error) {
      return 'failed to update color settings.'
    } else {
      const amuPackage = atom.packages.getLoadedPackage('wills-theme-ui');
      if (amuPackage) {
        amuPackage.deactivate();
        setImmediate(() => amuPackage.activate());
      }
    }
  })
}
