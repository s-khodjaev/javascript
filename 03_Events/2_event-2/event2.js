const buyButtons = document.querySelectorAll('.buy');

function handleBuyClick(e) {
  const button = e.target;
  // console.log(button.textContent);
  // console.log('You are buying it');
  // console.log(parseFloat(event.target.dataset.price));
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target === e.currentTarget);
  // stop this event from bubbling up
  event.stopPropagation();
}

buyButtons.forEach(function (button) {
  button.addEventListener('click', handleBuyClick);
});

window.addEventListener(
  'click',
  function (event) {
    console.log('You clicked the window!');
    console.log(event.target);
  },
  { capture: true }
);
