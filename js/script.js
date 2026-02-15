const parentElement = document.getElementById('main-container');

const section = document.createElement('section');

const h1 = document.createElement('h2');
h1.innerText = 'Places list :';
section.appendChild(h1);

const p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem optio enim, dolorem aperiam id sunt perspiciatis harum soluta impedit quos?';
section.appendChild(p);

const ul = document.createElement('ul');
section.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText = 'Dhaka';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Dinajpur';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Bogura';
ul.appendChild(li3);

parentElement.appendChild(section);