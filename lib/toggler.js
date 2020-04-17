'use babel'

export default function toggleClassName(className, mustAddClass) {
   const root = atom.workspace.getElement();

   if (mustAddClass) {
     if(typeof mustAddClass == "number"){
       alert('number added')
       document.documentElement.style.fontSize = mustAddClass + 'px'
     } else {
    alert('added')
       root.classList.add(className);
     }
   } else {
    alert('removed')
       root.classList.remove(className);
   }
}
