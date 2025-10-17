/**
 * ----------- PARENT NODE TRAVERSAL --------------
 */

let ul = document.querySelector('ul');
console.log(ul.parentNode);
console.log(ul.parentElement);
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.documentElement;
console.log(html.parentElement); // -> returns null
console.log(html.parentNode);

/**
 * --------- CHILD NODE TRAVERSAL --------------
 */

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = "blue"; 
// background color of first movie will be changed
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

/**
 * -------------- SIBLING NODE TRAVERSAL ---------------
 */

let ul_new = document.querySelector('ul');
const div = document.querySelector('div');
console.log("Child Nodes of ul: ",ul_new.childNodes);
console.log("Child nodes of div: ",div.childNodes);

console.log("Traversing siblings..");
console.log("Previous sibling of ul -> ",ul.previousSibling);
console.log("Next sibling of ul -> ",ul.nextSibling);
