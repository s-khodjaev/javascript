// 1. Function Calculate();
function calculate() {
  const total = Math.ceil((100 * 1.13) / 2);

  return total;
}

const myTotal = calculate();

console.log(myTotal);

// 2. Function Doctorize and hey
function doctorize(name) {
  return `Dr ${name}`;
}

function hey(name = 'Silly') {
  return `Hey ${name.toUpperCase()}`;
}

hey(doctorize('Shukhrat'));

// 3. Ways to make functions

// Classic function
function doctorize(name) {
  return `Hey ${name}`;
}

// Anonymous function: Nov valid JS
function (name) {
  return `Hey ${name}`;
}

// Function Expression
const doctorize = function (name) {
  return `Hey ${name}`;
};

// Arrow Functions

const inchToCM = (inches) => inches * 2.54;

function add(a, b = 3) {
  const total = a + b;
  return total;
}

const add = (a, b = 3) => a + b;

// Return an object inside a function
function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };

  return baby; 
}

// IIFE - Immediately Invoked Function Expression

(function () {
  console.log('Returning an anon function');
})();

// Methods

const wes = {
  name: 'Wes Bos',

  // Method
  sayHi: function () {
    console.log('Hey Wes');
  },

  // Short hand Method
  yellHi() {
    console.log('HEY WESS');
  },

  // Arrow function method
  whisperHi: () => {
    console.log('hey wes');
  },
};

// Callback functions

const button = document.querySelector('.clickMe');

// 1. First way
function handleClick() {
  console.log('Great Clicking!!!');
}

button.addEventListener('click', handleClick);

// 2. Second way
button.addEventListener('click', function () {
  console.log('Nice one!!!');
});

// Timer Callback

setTimeout(() => {
  console.log('Time to Eat!');
}, 4000);
