'use babel'

export default function toggleClassName(className, mustAddClass) {
   const root = atom.workspace.getElement();

   if (mustAddClass) {
    alert('added')
       root.classList.add(className);
   } else {
    alert('removed')
       root.classList.remove(className);
   }
}
