const categoriesEl = document.querySelector('#categories');
const numberOfCategories = categoriesEl.children.length;
console.log('Number of categories:', numberOfCategories);
//console.log(categoriesEl.children);
//[...categoriesEl.children].forEach(elem => console.log(elem.children[0].textContent));
//[...categoriesEl.children].forEach(elem => console.log(elem.firstElementChild.textContent));

//[...categoriesEl.children].forEach(elem => console.log(elem.children[1].children.length));
//[...categoriesEl.children].forEach(elem => console.log(elem.firstElementChild.nextElementSibling.children.length));
[...categoriesEl.children].forEach(elem => console.log(`
Category: ${elem.firstElementChild.textContent}
Elements: ${elem.firstElementChild.nextElementSibling.children.length}
`));
//const liItem = document.querySelectorAll('.item');
//liItem.forEach(el => console.log(el.children));

//const qqq = categoriesEl.querySelectorAll('ul');
//console.log(qqq);

//qqq.forEach(el=>console.log(el.children.length))


