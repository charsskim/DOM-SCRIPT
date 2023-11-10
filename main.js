const section = document.querySelector('section');
const articles = section.querySelectorAll('article'); //유사배열
const btn = section.querySelector('.btn');
const childrenEl = section.children;
const parentEl = btn.parentElement;
const grandParentEl = btn.closest('section');
const prevEl = btn.previousElementSibling;
const nextEl = btn.nextElementSibling;
const siblings = btn.parentElement.children;
console.log(siblings);

console.log('article');
console.log(btn);
console.log(childrenEl);
console.log(parentEl);
console.log(prevEl);
console.log(nextEl);
