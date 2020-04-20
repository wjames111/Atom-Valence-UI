'use babel'

export default function toggleClassName(className, mustAddClass) {
   const root = atom.workspace.getElement();

   if (mustAddClass) {
     if(className == 'font-size__active'){
       let fontValue = typeof mustAddClass == "number"? mustAddClass : parseInt(mustAddClass)
       let fontRange = fontValue > 26 ? 26 : fontValue < 6 ? 6 : mustAddClass
       document.documentElement.style.fontSize = fontRange + 'px'
       let message = fontRange >= 26 ? '26px is the maximum font-size supported' :  fontRange <= 6 ? '6px is the minimum font-size supported' : null
        message? alert(message) : null
     } else {
    alert('added')
       root.classList.add(className);
     }
   } else {
    alert('removed')
       root.classList.remove(className);
   }
}
