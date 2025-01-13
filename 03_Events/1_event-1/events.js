const btn = document.querySelector('.btn');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('it got clicked');
}

const hooray = () => console.log('HOORAY!');

btn.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

btn.removeEventListener('click', handleClick);

function buyItem() {
  console.log('Buying Item!');
}

function attachListener(buyButton) {
  buyButton.addEventListener('click', buyItem);
}
// Listen on multiple items

const buyButtons = document.querySelectorAll('.buy');

// buyButtons.forEach(attachListener);

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('You clicked it!');
  });
});
