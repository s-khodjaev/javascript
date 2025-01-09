// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
// const ul = document.createElement('ul');

// // add three list items with the words "one, two three" in them
// const li1 = document.createElement('li');
// li1.textContent = 'one';
// ul.appendChild(li1);

// const li2 = document.createElement('li');
// li2.textContent = 'two';
// ul.appendChild(li2);

// const li3 = document.createElement('li');
// li3.textContent = 'three';
// ul.appendChild(li3);
// // put that list into the above wrapper
// div.appendChild(ul);

const ul = `
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;

div.innerHTML = ul;

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/200/300';
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add('nice');
// add an alt of Cute Puppy
img.alt = 'Nice image';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHtml = `
  <div class="myDiv">
    <p>This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
  </div>
`;
const ulElement = div.querySelector('ul');
console.log(ulElement);
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHtml);

// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
console.log(myDiv);
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} - ${age}</h2>
      <p>Their height is ${height} and ${age} years old. In Dog years, this person would be ${
    age * 7
  }. That would be an old dog!
      </p>
      <button class="delete" type="button">&times; Delete</button>
    </div>
  `;
  return html;
}

// have that function return html that looks like this:
// {
//   /* <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>
//     They are HEIGHT and AGE years old. In Dog years this person would be
//     AGEINDOGYEARS. That would be a tall dog!
//   </p>
// </div>; */
// }

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards
let cardsHTML = generatePlayerCard('wes', 12, 183);
cardsHTML += generatePlayerCard('scott', 12, 183);
cardsHTML += generatePlayerCard('scott', 12, 183);
cardsHTML += generatePlayerCard('scott', 12, 183);
console.log(cardsHTML);

// append those cards to the div
cards.innerHTML = cardsHTML;

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
const buttons = document.querySelectorAll('.delete');

function deleteButton() {
  // when you click the button, remove the parent element (the whole card)
  this.parentElement.remove();
}

buttons.forEach((button) => {
  button.addEventListener('click', deleteButton);
});
