const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = 'Hey Im Red!';
content.style.cssText = 'color:blue;';
container.appendChild(content);


const hthree = document.createElement('h3');
hthree.classList.add('blueh3');
hthree.textContent = 'Im a blue h3';
hthree.setAttribute('style' , 'color:blue;');
container.appendChild(hthree);