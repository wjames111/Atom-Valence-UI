'use babel'

export default function toggleClassName(className, mustAddClass) {
  const root = atom.workspace.getElement();
  // toggle className to root element
  if (mustAddClass) {
    if (className == 'font-size__active') {   // check for font-size setting
      let fontValue = typeof mustAddClass == "number"? mustAddClass : parseInt(mustAddClass)
      document.documentElement.style.fontSize = fontValue + 'px'
    } else {
      root.classList.add(className);
    }
  } else {
      root.classList.remove(className);
   }
}
