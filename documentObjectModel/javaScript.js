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

const divTwo = document.createElement('div');
divTwo.classList.add('divTwoo');
divTwo.setAttribute('style', 'border:black; background:pink;');

const hOne = document.createElement('h1');
hOne.textContent = 'Im in a div';
divTwo.appendChild(hOne);

const para = document.createElement('p');
para.textContent = 'Me too!';
divTwo.appendChild(para);
container.appendChild(divTwo);

const btnOne = document.querySelector('#btnOne');
btnOne.onclick = () => alert("Hello World");
