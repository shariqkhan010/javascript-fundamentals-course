export class CourseState {
    constructor() {
      this.progress = this.loadProgress();
      this.currentModule = 0;
      this.currentQuiz = null;
      this.modules = [
        {
          id: 0,
          title: 'Introduction',
          completed: false,
          duration: '30 minutes',
          sections: [
            {
              title: 'What is JavaScript?',
              content: `
                <h4>Overview</h4>
                <p>JavaScript is a versatile programming language that powers the modern web. It allows you to create interactive websites and web applications that respond to user actions in real-time.</p>
                
                <h4>Key Features:</h4>
                <ul>
                  <li>Client-side scripting language that runs in web browsers</li>
                  <li>Dynamic content updates without page reloads</li>
                  <li>Event-driven programming for interactive experiences</li>
                  <li>Cross-platform compatibility across devices</li>
                  <li>Rich ecosystem of libraries and frameworks</li>
                </ul>
              `
            },
            {
              title: 'Course Structure',
              content: `
                <h4>Learning Path</h4>
                <p>This course is structured to take you from basics to advanced JavaScript concepts:</p>
                <ul>
                  <li>JavaScript Fundamentals (Variables, Data Types, Control Flow)</li>
                  <li>Functions and Scope</li>
                  <li>Objects and Arrays</li>
                  <li>DOM Manipulation</li>
                  <li>Modern JavaScript (ES6+)</li>
                  <li>Asynchronous Programming</li>
                </ul>
  
                <h4>Learning Methods</h4>
                <ul>
                  <li>Interactive lessons with live code examples</li>
                  <li>Hands-on exercises with instant feedback</li>
                  <li>AI-powered learning assistant for deeper understanding</li>
                  <li>Module quizzes to test knowledge</li>
                  <li>Real-world project application</li>
                </ul>
              `
            }
          ]
        },
        {
          id: 1,
          title: 'JavaScript Basics',
          completed: false,
          duration: '2 hours',
          sections: [
            {
              title: 'Variables and Scope',
              content: `
                <h4>Variable Declaration</h4>
                <p>Modern JavaScript provides three ways to declare variables, each with its own characteristics:</p>
                
                <pre><code>
  // let - for values that will change
  let age = 25;
  let name = "John";
  
  // const - for values that won't change
  const PI = 3.14159;
  const DAYS_IN_WEEK = 7;
  
  // var (legacy) - function scoped, not recommended
  var oldStyle = "avoid using var";
                </code></pre>
  
                <h4>Block Scope vs Function Scope</h4>
                <pre><code>
  function scopeExample() {
    let blockScoped = "visible only in block";
    
    if (true) {
      let blockScoped = "different variable";
      const alsoBlockScoped = "only in if block";
      console.log(blockScoped); // "different variable"
    }
    
    console.log(blockScoped); // "visible only in block"
  }
                </code></pre>
              `
            },
            {
              title: 'Data Types',
              content: `
                <h4>Primary Data Types</h4>
                <pre><code>
  // Numbers
  let integer = 42;
  let float = 3.14;
  
  // Strings
  let single = 'Single quotes';
  let double = "Double quotes";
  let template = \`Template literal: \${integer}\`;
  
  // Booleans
  let isActive = true;
  let isLoading = false;
  
  // Null and Undefined
  let empty = null;
  let notDefined;  // undefined
  
  // Symbol (unique identifiers)
  const uniqueKey = Symbol('description');
                </code></pre>
  
                <h4>Type Checking and Conversion</h4>
                <pre><code>
  // Type checking
  console.log(typeof 42);  // "number"
  console.log(typeof "hello");  // "string"
  console.log(typeof true);  // "boolean"
  
  // Type conversion
  let str = String(123);  // "123"
  let num = Number("123");  // 123
  let bool = Boolean(1);  // true
                </code></pre>
              `
            }
          ]
        },
        {
          id: 2,
          title: 'Control Structures',
          completed: false,
          duration: '2 hours',
          sections: [
            {
              title: 'Conditional Statements',
              content: `
                <h4>If Statements and Comparison</h4>
                <pre><code>
  // Basic if-else
  let age = 18;
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
  
  // Multiple conditions
  let score = 85;
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else {
    console.log("C");
  }
  
  // Ternary operator
  let status = age >= 18 ? "Adult" : "Minor";
                </code></pre>
  
                <h4>Switch Statements</h4>
                <pre><code>
  let day = "Monday";
  switch (day) {
    case "Monday":
      console.log("Start of week");
      break;
    case "Friday":
      console.log("Weekend soon");
      break;
    default:
      console.log("Midweek");
  }
                </code></pre>
              `
            },
            {
              title: 'Loops',
              content: `
                <h4>Modern Loop Patterns</h4>
                <pre><code>
  // For...of (arrays)
  const fruits = ['apple', 'banana', 'orange'];
  for (const fruit of fruits) {
    console.log(fruit);
  }
  
  // For...in (objects)
  const person = { name: 'John', age: 30 };
  for (const key in person) {
    console.log(\`\${key}: \${person[key]}\`);
  }
  
  // Array methods
  fruits.forEach(fruit => console.log(fruit));
                </code></pre>
  
                <h4>Traditional Loops</h4>
                <pre><code>
  // For loop
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  
  // While loop
  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }
                </code></pre>
              `
            }
          ]
        },
        {
          id: 3,
          title: 'Functions',
          completed: false,
          duration: '3 hours',
          sections: [
            {
              title: 'Function Declarations',
              content: `
                <h4>Modern Function Syntax</h4>
                <pre><code>
  // Arrow Functions
  const add = (a, b) => a + b;
  const greet = name => \`Hello, \${name}\`;
  const complex = () => {
    // Multiple lines need curly braces
    let result = 0;
    return result;
  };
  
  // Default Parameters
  const createUser = (name = 'Guest', role = 'user') => ({
    name,
    role
  });
                </code></pre>
  
                <h4>Function Types</h4>
                <pre><code>
  // Regular function
  function multiply(a, b) {
    return a * b;
  }
  
  // Function expression
  const divide = function(a, b) {
    return a / b;
  };
  
  // Method in object
  const calculator = {
    add: (a, b) => a + b,
    subtract(a, b) { return a - b }  // Method shorthand
  };
                </code></pre>
              `
            }
          ]
        },
        {
          id: 4,
          title: 'Objects and Arrays',
          completed: false,
          duration: '3 hours',
          sections: [
            {
              title: 'Modern Array Methods',
              content: `
                <h4>Transformation Methods</h4>
                <pre><code>
  const numbers = [1, 2, 3, 4, 5];
  
  // map - transform each element
  const doubled = numbers.map(n => n * 2);
  
  // filter - select elements
  const evens = numbers.filter(n => n % 2 === 0);
  
  // reduce - accumulate values
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
                </code></pre>
  
                <h4>Array Operations</h4>
                <pre><code>
  // Spread operator
  const combined = [...numbers, 6, 7];
  
  // Destructuring
  const [first, second, ...rest] = numbers;
  
  // Finding elements
  const found = numbers.find(n => n > 3);
  const index = numbers.findIndex(n => n > 3);
                </code></pre>
              `
            }
          ]
        },
        {
          id: 5,
          title: 'DOM Manipulation',
          completed: false,
          duration: '4 hours',
          sections: [
            {
              title: 'Introduction to DOM',
              content: `
                <h4>What is the DOM?</h4>
                <p>The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page as a tree-like structure where each element is a node.</p>
                
                <h4>Accessing DOM Elements:</h4>
                <pre><code>
  // By ID
  const element = document.getElementById('myId');
  
  // By Class Name
  const elements = document.getElementsByClassName('myClass');
  
  // By Tag Name
  const paragraphs = document.getElementsByTagName('p');
  
  // Using Query Selectors (modern approach)
  const element = document.querySelector('.myClass');
  const elements = document.querySelectorAll('.myClass');
                </code></pre>
                
                <h4>Best Practices:</h4>
                <ul>
                  <li>Use querySelector/querySelectorAll for modern applications</li>
                  <li>Cache DOM elements that you'll use multiple times</li>
                  <li>Be specific with your selectors to improve performance</li>
                  <li>Use appropriate semantic HTML elements</li>
                </ul>
              `
            },
            {
              title: 'Modifying DOM Elements',
              content: `
                <h4>Changing Element Content:</h4>
                <pre><code>
  // Change text content
  element.textContent = 'New text';
  
  // Change HTML content
  element.innerHTML = '<span>New HTML</span>';
  
  // Change attributes
  element.setAttribute('class', 'newClass');
  element.getAttribute('class');
  element.removeAttribute('class');
  
  // Working with classes
  element.classList.add('newClass');
  element.classList.remove('oldClass');
  element.classList.toggle('active');
                </code></pre>
  
                <h4>Creating and Removing Elements:</h4>
                <pre><code>
  // Create new element
  const newDiv = document.createElement('div');
  newDiv.textContent = 'New Element';
  
  // Add to document
  parentElement.appendChild(newDiv);
  
  // Remove element
  element.remove();
  // or
  parentElement.removeChild(element);
                </code></pre>
              `
            },
            {
              title: 'Event Handling',
              content: `
                <h4>Adding Event Listeners:</h4>
                <pre><code>
  // Basic event listener
  element.addEventListener('click', function(event) {
    console.log('Element clicked!');
  });
  
  // With arrow function
  element.addEventListener('click', (event) => {
    console.log('Element clicked!');
  });
  
  // Common events:
  // click, mouseover, mouseout, keydown, keyup,
  // submit, change, load, DOMContentLoaded
                </code></pre>
  
                <h4>Event Object Properties:</h4>
                <pre><code>
  element.addEventListener('click', (event) => {
    // Prevent default behavior
    event.preventDefault();
    
    // Stop event bubbling
    event.stopPropagation();
    
    // Get target element
    const target = event.target;
    
    // Get mouse coordinates
    const x = event.clientX;
    const y = event.clientY;
  });
                </code></pre>
              `
            }
          ]
        },
        {
          id: 6,
          title: 'Asynchronous JavaScript',
          completed: false,
          duration: '4 hours',
          sections: [
            {
              title: 'Promises',
              content: `
                <h4>Understanding Promises</h4>
                <p>Promises are objects representing the eventual completion (or failure) of an asynchronous operation.</p>
                
                <h4>Creating Promises:</h4>
                <pre><code>
  const myPromise = new Promise((resolve, reject) => {
    // Async operation here
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Operation completed!');
      } else {
        reject('Operation failed!');
      }
    }, 1000);
  });
  
  // Using the promise
  myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
                </code></pre>
  
                <h4>Promise Methods:</h4>
                <pre><code>
  // Promise.all - wait for all promises
  Promise.all([promise1, promise2])
    .then(results => console.log(results));
  
  // Promise.race - first promise to complete
  Promise.race([promise1, promise2])
    .then(result => console.log(result));
                </code></pre>
              `
            },
            {
              title: 'Async/Await',
              content: `
                <h4>Modern Asynchronous JavaScript</h4>
                <p>Async/await provides a more synchronous-looking way to write asynchronous code.</p>
  
                <h4>Basic Syntax:</h4>
                <pre><code>
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Using async/await with arrow functions
  const getData = async () => {
    const result = await someAsyncOperation();
    return result;
  };
                </code></pre>
  
                <h4>Error Handling:</h4>
                <pre><code>
  async function handleErrors() {
    try {
      const result = await riskyOperation();
      console.log(result);
    } catch (error) {
      console.error('Something went wrong:', error);
    } finally {
      console.log('Cleanup code here');
    }
  }
                </code></pre>
              `
            }
          ]
        },
        {
          id: 7,
          title: 'Modern JavaScript Features',
          completed: false,
          duration: '4 hours',
          sections: [
            {
              title: 'ES6 Fundamentals',
              content: `
                <h4>What is ES6/ES2015?</h4>
                <p>ES6 (ECMAScript 2015) brought significant improvements to JavaScript, making the language more powerful and expressive.</p>
  
                <h4>Let and Const</h4>
                <pre><code>
  // Block scoping with let
  let x = 10;
  if (true) {
    let x = 20; // Different variable
    console.log(x); // 20
  }
  console.log(x); // 10
  
  // Constants with const
  const PI = 3.14159;
  const config = {
    apiKey: 'abc123'
  };
  
  // config can still be modified
  config.apiKey = 'xyz789'; // OK
  // but can't be reassigned
  // config = {}; // Error!
                </code></pre>
  
                <h4>Template Literals</h4>
                <pre><code>
  const name = 'Alice';
  const greeting = \`Hello, \${name}!
  Welcome to ES6.\`;
  
  // Multi-line strings
  const html = \`
    <div>
      <h1>Title</h1>
      <p>Content</p>
    </div>
  \`;
                </code></pre>
  
                <h4>Arrow Functions</h4>
                <pre><code>
  // Traditional function
  function add(a, b) {
    return a + b;
  }
  
  // Arrow function
  const add = (a, b) => a + b;
  
  // With implicit return
  const square = x => x * x;
  
  // Arrow functions and this
  class Timer {
    constructor() {
      this.seconds = 0;
      setInterval(() => this.tick(), 1000);
    }
    
    tick() {
      this.seconds++;
    }
  }
                </code></pre>
              `
            },
            {
              title: 'Destructuring and Spread',
              content: `
                <h4>Object Destructuring</h4>
                <pre><code>
  // Basic object destructuring
  const user = {
    name: 'John',
    age: 30,
    location: 'New York'
  };
  
  const { name, age } = user;
  console.log(name); // 'John'
  
  // With different variable names
  const { name: fullName, age: years } = user;
  console.log(fullName); // 'John'
  
  // With default values
  const { country = 'USA' } = user;
  console.log(country); // 'USA'
                </code></pre>
  
                <h4>Array Destructuring</h4>
                <pre><code>
  // Basic array destructuring
  const colors = ['red', 'green', 'blue'];
  const [primary, secondary] = colors;
  
  // Skip elements
  const [, , tertiary] = colors;
  
  // Rest pattern
  const [head, ...tail] = [1, 2, 3, 4];
  console.log(head); // 1
  console.log(tail); // [2, 3, 4]
  
  // Swap variables
  let a = 1, b = 2;
  [a, b] = [b, a];
                </code></pre>
  
                <h4>Spread Operator</h4>
                <pre><code>
  // Array spread
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5];
  console.log(arr2); // [1, 2, 3, 4, 5]
  
  // Object spread
  const defaults = { theme: 'light', lang: 'en' };
  const userPrefs = { theme: 'dark' };
  const settings = { ...defaults, ...userPrefs };
  // { theme: 'dark', lang: 'en' }
  
  // Function arguments
  const numbers = [1, 2, 3];
  console.log(Math.max(...numbers));
                </code></pre>
              `
            },
            {
              title: 'Classes and Modules',
              content: `
                <h4>ES6 Classes</h4>
                <pre><code>
  // Class declaration
  class Animal {
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      return \`\${this.name} makes a sound.\`;
    }
  }
  
  // Inheritance
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    
    speak() {
      return \`\${this.name} barks!\`;
    }
    
    static createPuppy(name) {
      return new Dog(name, 'mixed');
    }
  }
  
  const rex = new Dog('Rex', 'German Shepherd');
                </code></pre>
  
                <h4>Modules</h4>
                <pre><code>
  // math.js
  export const add = (a, b) => a + b;
  export const multiply = (a, b) => a * b;
  export default class Calculator {
    // class implementation
  }
  
  // main.js
  import Calculator, { add, multiply } from './math.js';
  import * as mathUtils from './math.js';
  
  // Using the imports
  console.log(add(2, 3));
  const calc = new Calculator();
                </code></pre>
  
                <h4>Private Class Fields</h4>
                <pre><code>
  class BankAccount {
    #balance = 0;  // Private field
    
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
    
    get balance() {
      return this.#balance;
    }
    
    deposit(amount) {
      this.#balance += amount;
    }
  }
  
  const account = new BankAccount(1000);
  console.log(account.balance);  // 1000
  // console.log(account.#balance);  // Error!
                </code></pre>
              `
            },
            {
              title: 'Async JavaScript',
              content: `
                <h4>Promises</h4>
                <pre><code>
  // Creating a promise
  const delay = ms => new Promise(resolve => {
    setTimeout(resolve, ms);
  });
  
  // Using promises
  delay(1000)
    .then(() => console.log('One second passed'))
    .catch(error => console.error(error));
  
  // Promise chaining
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
                </code></pre>
  
                <h4>Async/Await</h4>
                <pre><code>
  // Async function declaration
  async function fetchUserData() {
    try {
      const response = await fetch('https://api.example.com/user');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Arrow function with async
  const fetchPosts = async () => {
    const response = await fetch('https://api.example.com/posts');
    return response.json();
  };
  
  // Using async functions
  async function initApp() {
    const [userData, posts] = await Promise.all([
      fetchUserData(),
      fetchPosts()
    ]);
    
    console.log(userData, posts);
  }
                </code></pre>
  
                <h4>Iterators and Generators</h4>
                <pre><code>
  // Custom iterator
  const range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
      return {
        current: this.from,
        last: this.to,
        next() {
          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  // Generator function
  function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const gen = numberGenerator();
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
                </code></pre>
              `
            }
          ]
        }
      ];
      this.quizzes = {
        1: {
          title: 'JavaScript Basics Quiz',
          totalPoints: 4,
          grade: 0,
          questions: [
            {
              question: 'Which keyword is used to declare a constant variable?',
              options: ['var', 'let', 'const', 'static'],
              correct: 2,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is the result of 5 + "3"?',
              options: ['8', '53', 'NaN', 'Error'],
              correct: 1,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is the difference between null and undefined?',
              options: [
                'They are exactly the same',
                'null is assigned by JavaScript, undefined is assigned by developers',
                'undefined is assigned by JavaScript, null is assigned by developers',
                'They are both invalid values'
              ],
              correct: 2,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'Which operator is used for strict equality comparison?',
              options: ['==', '===', '=', '!='],
              correct: 1,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            }
          ]
        },
        2: {
          title: 'Control Flow Quiz',
          totalPoints: 4,
          grade: 0,
          questions: [
            {
              question: 'Which loop is best for iterating over object properties?',
              options: [
                'for loop',
                'while loop',
                'for...of loop',
                'for...in loop'
              ],
              correct: 3,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is the purpose of the break statement?',
              options: [
                'To skip the current iteration',
                'To exit the entire loop',
                'To continue to the next function',
                'To stop the program'
              ],
              correct: 1,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What does the switch statement compare values with?',
              options: [
                'Loose equality (==)',
                'Strict equality (===)',
                'Less than (<)',
                'Greater than (>)'
              ],
              correct: 1,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is the correct way to write an infinite loop?',
              options: [
                'while(1)',
                'for(;;)',
                'loop(true)',
                'Both A and B are correct'
              ],
              correct: 3,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            }
          ]
        },
        3: {
          title: 'Functions Deep Dive Quiz',
          totalPoints: 4,
          grade: 0,
          questions: [
            {
              question: 'What is a closure in JavaScript?',
              options: [
                'A function that has access to variables in its outer scope',
                'A function that returns nothing',
                'A function that takes no parameters',
                'A function that closes the program'
              ],
              correct: 0,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What does the "this" keyword refer to in an arrow function?',
              options: [
                'The window object',
                'The function itself',
                'The lexical scope',
                'The global scope'
              ],
              correct: 2,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is function hoisting?',
              options: [
                'Moving function declarations to the top of their scope',
                'Moving function calls to the end of the file',
                'Removing unused functions',
                'Converting functions to arrow functions'
              ],
              correct: 0,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is the rest parameter syntax?',
              options: [
                '...args',
                '*args',
                'args...',
                'args*'
              ],
              correct: 0,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            }
          ]
        },
        4: {
          title: 'Objects and Arrays Quiz',
          totalPoints: 4,
          grade: 0,
          questions: [
            {
              question: 'Which method creates a new array with the results of calling a provided function on every element?',
              options: [
                'forEach()',
                'filter()',
                'map()',
                'reduce()'
              ],
              correct: 2,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is object destructuring?',
              options: [
                'Deleting object properties',
                'Extracting values from objects into variables',
                'Combining multiple objects',
                'Converting objects to arrays'
              ],
              correct: 1,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is the spread operator used for?',
              options: [
                'To delete array elements',
                'To expand elements',
                'To sort arrays',
                'To filter arrays'
              ],
              correct: 1,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'How do you clone an object in JavaScript?',
              options: [
                'object.clone()',
                'Object.assign({}, object)',
                '{...object}',
                'Both B and C are correct'
              ],
              correct: 3,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            }
          ]
        },
        5: {
          title: 'DOM Manipulation Quiz',
          totalPoints: 4,
          grade: 0,
          questions: [
            {
              question: 'What method is used to create a new DOM element?',
              options: [
                'createElement()',
                'createNode()',
                'appendElement()',
                'makeElement()'
              ],
              correct: 0,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is event delegation?',
              options: [
                'Removing event listeners',
                'Adding events to future elements',
                'Handling events at a higher level in the DOM',
                'Creating custom events'
              ],
              correct: 2,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'Which method is used to remove a DOM element?',
              options: [
                'delete()',
                'remove()',
                'removeChild()',
                'Both B and C are correct'
              ],
              correct: 3,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is the difference between innerHTML and textContent?',
              options: [
                'innerHTML is faster',
                'textContent is safer for user input',
                'innerHTML can create elements',
                'They are exactly the same'
              ],
              correct: 1,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            }
          ]
        },
        6: {
          title: 'Asynchronous JavaScript Quiz',
          totalPoints: 4,
          grade: 0,
          questions: [
            {
              question: 'What is a Promise in JavaScript?',
              options: [
                'A guarantee that code will never fail',
                'A proxy for a value that will be available in the future',
                'A way to write synchronous code',
                'A special type of function'
              ],
              correct: 1,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is the purpose of async/await?',
              options: [
                'To make code run faster',
                'To handle errors better',
                'To write asynchronous code in a synchronous way',
                'To create new promises'
              ],
              correct: 2,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is the event loop?',
              options: [
                'A browser feature for handling events',
                'A mechanism to execute code in parallel',
                'A way to handle asynchronous operations',
                'A type of for loop'
              ],
              correct: 2,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What happens when await is used outside an async function?',
              options: [
                'Nothing',
                'SyntaxError',
                'Runtime error',
                'The code runs synchronously'
              ],
              correct: 1,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            }
          ]
        },
        7: {
          title: 'Modern JavaScript Features Quiz',
          totalPoints: 4,
          grade: 0,
          questions: [
            {
              question: 'What is the purpose of the optional chaining operator (?.)?',
              options: [
                'To create optional parameters',
                'To safely access nested object properties',
                'To check if a variable exists',
                'To create optional functions'
              ],
              correct: 1,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is the nullish coalescing operator (??)?',
              options: [
                'Returns right operand only when left is null or undefined',
                'Combines two values',
                'Checks if a value is null',
                'Creates a default value'
              ],
              correct: 0,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What are private class fields?',
              options: [
                'Variables that cannot be changed',
                'Properties only accessible within the class',
                'Hidden variables in functions',
                'Static class properties'
              ],
              correct: 1,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            },
            {
              question: 'What is the purpose of the static keyword in classes?',
              options: [
                'To create unchangeable properties',
                'To define methods that can be called without instantiation',
                'To optimize performance',
                'To prevent inheritance'
              ],
              correct: 1,
              attempts: 0,
              maxAttempts: 2,
              points: 0
            }
          ]
        }
      };
      this.codingChallenges = {
        2: [ 
          {
            title: "Loop Challenge",
            description: "Write a function that prints numbers from 1 to n, but for multiples of 3 print 'Fizz' and for multiples of 5 print 'Buzz'. For numbers which are multiples of both 3 and 5 print 'FizzBuzz'.",
            startingCode: `function fizzBuzz(n) {
        // Write your solution here
        
      }
  
      // Test your solution
      fizzBuzz(15);`,
            testCases: [
              {
                input: 15,
                expectedOutput: [
                  "1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"
                ]
              }
            ],
            hint: "Consider using a loop and the modulo operator (%) to check for divisibility",
            solution: `function fizzBuzz(n) {
        for(let i = 1; i <= n; i++) {
          if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
          } else if(i % 3 === 0) {
            console.log('Fizz');
          } else if(i % 5 === 0) {
            console.log('Buzz');
          } else {
            console.log(i);
          }
        }
      }`
          }
        ],
        4: [ 
          {
            title: "Array Transformation",
            description: "Write a function that takes an array of numbers and returns a new array with each number squared, but only if the number is positive.",
            startingCode: `function squarePositives(numbers) {
        // Write your solution here
        
      }
  
      // Test your solution
      const numbers = [-2, 0, 3, -5, 4, 1];
      console.log(squarePositives(numbers));`,
            testCases: [
              {
                input: [-2, 0, 3, -5, 4, 1],
                expectedOutput: [0, 9, 16, 1]
              }
            ],
            hint: "Try using array methods like filter() and map()",
            solution: `function squarePositives(numbers) {
        return numbers
          .filter(n => n >= 0)
          .map(n => n * n);
      }`
          }
        ]
      };
      this.competencyLevels = {
        BEGINNER: 'Beginner',
        INTERMEDIATE: 'Intermediate',
        ADVANCED: 'Advanced',
        EXPERT: 'Expert'
      };
  
      this.competencyThresholds = {
        BEGINNER: 60,
        INTERMEDIATE: 75,
        ADVANCED: 85,
        EXPERT: 95
      };
  
      this.userProgress = {
        totalScore: 0,
        quizzesTaken: 0,
        averageScore: 0,
        currentCompetency: this.competencyLevels.BEGINNER,
        desiredCompetency: this.competencyLevels.ADVANCED,
        moduleScores: {},
        passingScore: 70
      };
  
      this.loadUserProgress();
      this.loadModuleProgress();
      this.loadProgress();
  
      this.studyPlan = {
        currentStreak: 0,
        lastStudyDate: null,
        weeklyGoals: {
          hoursTarget: 10,
          hoursCompleted: 0,
          modulesTarget: 2,
          modulesCompleted: 0
        },
        reminders: [
          {
            id: 1,
            time: "18:00",
            days: ["Monday", "Wednesday", "Friday"],
            enabled: true
          }
        ]
      };
  
      this.notes = {
        byModule: {},
        tags: new Set(),
        searchIndex: {}
      };
  
      this.flashcards = {
        decks: {},
        review: {
          nextReview: {},
          stats: {
            correct: 0,
            incorrect: 0
          }
        }
      };
  
      this.certifications = {
        completed: [],
        inProgress: [],
        prerequisites: {
          "javascript-fundamentals": ["intro-to-programming"],
          "advanced-js": ["javascript-fundamentals"]
        }
      };
  
      this.peerLearning = {
        discussions: [],
        codeReviews: [],
        studyGroups: [],
        feedback: []
      };
  
      this.enhancedAnalytics = {
        learningStyle: null,
        predictedCompletion: null,
        strengths: [],
        weaknesses: [],
        recommendations: [],
        studyTimeByModule: {},
        averageCompletionTime: {},
        learningPath: {
          current: null,
          recommended: [],
          prerequisites: {}
        }
      };
  
      this.initializeAnalytics();
      this.moduleTimers = {
        currentModule: null,
        startTime: null,
        moduleTime: {} 
      };
  
      this.loadModuleTimers();
    }
  
    loadUserProgress() {
      const saved = localStorage.getItem('userProgress');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.userProgress = {
          ...this.userProgress,
          ...parsed
        };
      }
    }
  
    saveUserProgress() {
      localStorage.setItem('userProgress', JSON.stringify(this.userProgress));
    }
  
    calculateCompetency(score) {
      if (score >= this.competencyThresholds.EXPERT) return this.competencyLevels.EXPERT;
      if (score >= this.competencyThresholds.ADVANCED) return this.competencyLevels.ADVANCED;
      if (score >= this.competencyThresholds.INTERMEDIATE) return this.competencyLevels.INTERMEDIATE;
      return this.competencyLevels.BEGINNER;
    }
  
    previousModule() {
      if (this.currentModule > 0) {
        this.currentModule--;
        window.app.ui.showLessons();
      }
    }
  
    nextModule() {
      if (this.currentModule < this.modules.length - 1) {
        this.currentModule++;
        window.app.ui.showLessons();
      }
    }
  
    startQuiz(moduleId) {
      if (moduleId === undefined || !this.quizzes[moduleId]) {
        console.warn(`No quiz found for module ${moduleId}`);
        return false;
      }
      this.currentQuiz = moduleId;
      this.quizzes[moduleId].questions = this.quizzes[moduleId].questions.map(q => ({
        ...q,
        attempts: 0,
        points: 0,
        answered: false
      }));
      this.quizzes[moduleId].grade = 0;
      return true;
    }
  
    submitQuizAnswer(questionIndex, answerIndex) {
      if (this.currentQuiz === null || !this.quizzes[this.currentQuiz]) {
        return {
          isCorrect: false,
          explanation: 'Quiz not properly initialized. Please try again.',
          canRetry: false,
          attemptsLeft: 0,
          grade: 0
        };
      }
  
      const quiz = this.quizzes[this.currentQuiz];
      const question = quiz.questions[questionIndex];
  
      if (!question) {
        return {
          isCorrect: false,
          explanation: 'Question not found. Please try again.',
          canRetry: false,
          attemptsLeft: 0,
          grade: 0
        };
      }
  
      question.attempts++;
      const isCorrect = answerIndex === question.correct;
      const attemptsLeft = question.maxAttempts - question.attempts;
      const canRetry = !isCorrect && attemptsLeft > 0;
  
      if (isCorrect && !question.answered) {
        question.points = question.attempts === 1 ? 2 : 1;
        question.answered = true;
        
        quiz.grade = this.calculateQuizGrade(quiz);
        
        this.userProgress.moduleScores[this.currentQuiz] = quiz.grade;
        this.updateOverallProgress();
        
        this.progress.completed++;
        this.saveProgress();
        this.saveUserProgress();
      }
  
      return {
        isCorrect,
        explanation: isCorrect 
          ? `Correct! "${question.options[question.correct]}" is the right answer.`
          : `Not quite right. ${canRetry ? 'Try again!' : `The correct answer is: "${question.options[question.correct]}"`}
             ${this.getHelpfulHint(this.currentQuiz, questionIndex)}`,
        canRetry,
        attemptsLeft,
        grade: quiz.grade,
        points: question.points,
        competencyLevel: this.calculateCompetency(quiz.grade)
      };
    }
  
    updateOverallProgress() {
      const scores = Object.values(this.userProgress.moduleScores);
      this.userProgress.quizzesTaken = scores.length;
      this.userProgress.totalScore = scores.reduce((sum, score) => sum + score, 0);
      this.userProgress.averageScore = scores.length > 0 ? 
        this.userProgress.totalScore / scores.length : 0;
      this.userProgress.currentCompetency = 
        this.calculateCompetency(this.userProgress.averageScore);
    }
  
    resetQuizAttempts(moduleId) {
      if (this.quizzes[moduleId]) {
        this.quizzes[moduleId].questions = this.quizzes[moduleId].questions.map(q => ({
          ...q,
          attempts: 0,
          points: 0,
          answered: false
        }));
        return true;
      }
      return false;
    }
  
    getQuizState(moduleId) {
      return this.quizzes[moduleId] || null;
    }
  
    resetQuiz(moduleId) {
      if (this.quizzes[moduleId]) {
        this.currentQuiz = null;
        this.quizzes[moduleId].questions = this.quizzes[moduleId].questions.map(q => ({
          ...q,
          answered: false
        }));
      }
    }
  
    completeModule(moduleId) {
      const module = this.modules.find(m => m.id === moduleId);
      if (module) {
        module.completed = true;
        this.saveModuleProgress();
        
        // Update user progress
        this.updateOverallProgress();
        this.saveUserProgress();
      }
    }
  
    saveModuleProgress() {
      const progress = this.modules.map(m => ({
        id: m.id,
        completed: m.completed,
        sectionsCompleted: m.sectionsCompleted || []
      }));
      
      localStorage.setItem('moduleProgress', JSON.stringify(progress));
    }
  
    loadModuleProgress() {
      const saved = localStorage.getItem('moduleProgress');
      if (saved) {
        const progress = JSON.parse(saved);
        progress.forEach(p => {
          const module = this.modules.find(m => m.id === p.id);
          if (module) {
            module.completed = p.completed;
            module.sectionsCompleted = p.sectionsCompleted || [];
          }
        });
      }
    }
  
    getRelevantContent(moduleId, questionIndex) {
      const contentMap = {
        0: { 
          0: { moduleId: 0, sectionIndex: 0 }, 
          1: { moduleId: 0, sectionIndex: 0 }  
        },
        1: { 
          0: { moduleId: 1, sectionIndex: 0 }, 
          1: { moduleId: 1, sectionIndex: 1 }  
        },
        7: { 
          0: { moduleId: 7, sectionIndex: 1 }, 
          1: { moduleId: 7, sectionIndex: 1 }  
        }
      };
  
      return contentMap[moduleId]?.[questionIndex] || { moduleId: moduleId, sectionIndex: 0 };
    }
  
    storeQuizProgress() {
      if (this.currentQuiz !== null) {
        localStorage.setItem('quizProgress', JSON.stringify({
          quizId: this.currentQuiz,
          state: this.quizzes[this.currentQuiz]
        }));
      }
    }
  
    restoreQuizProgress() {
      const saved = localStorage.getItem('quizProgress');
      if (saved) {
        const { quizId, state } = JSON.parse(saved);
        this.currentQuiz = quizId;
        this.quizzes[quizId] = state;
        return true;
      }
      return false;
    }
  
    clearQuizProgress() {
      localStorage.removeItem('quizProgress');
    }
  
    getHelpfulHint(moduleId, questionIndex) {
      const hints = {
        0: { 
          0: "Remember that JavaScript is primarily a client-side language used to create interactive web experiences.",
          1: "Focus on JavaScript's core features - it's a scripting language for web browsers, not for system-level programming."
        },
        1: { 
          0: "The 'const' keyword is used for values that won't be reassigned, while 'let' and 'var' are for changeable variables.",
          1: "When using the + operator with different types, JavaScript performs type coercion. With a string, it converts numbers to strings and concatenates."
        },
        2: {
          0: "The ternary operator (?:) is a shorthand for if-else statements. It evaluates a condition and returns one of two values.",
          1: "Think about what you're trying to access - array elements, or object properties?"
        },
        3: {
          0: "Think about how 'this' behaves differently in arrow functions versus regular functions.",
          1: "Arrow functions have several valid syntaxes - which one matches the standard format?"
        },
        4: {
          0: "Consider which array method transforms each element into something new.",
          1: "The spread operator is used to expand elements - think about where this would be useful."
        },
        5: {
          0: "Consider performance and flexibility when selecting DOM elements.",
          1: "Think about the direction events propagate through the DOM tree."
        },
        6: {
          0: "Consider readability and error handling when working with asynchronous code.",
          1: "Think about the different states a Promise can be in during its lifecycle."
        },
        7: {
          0: "The object destructuring syntax uses curly braces {} to extract properties. Array destructuring uses square brackets [].",
          1: "The spread/rest operator (...) collects remaining array elements into a new array."
        }
      };
  
      return hints[moduleId]?.[questionIndex] || "Review the module content and try again!";
    }
  
    loadProgress() {
      const saved = localStorage.getItem('courseProgress');
      const saveCodingProgress = localStorage.getItem('codingProgress');
      if (saveCodingProgress) {
        this.codingProgress = JSON.parse(saveCodingProgress);
      }
      return saved ? JSON.parse(saved) : { completed: 0, total: 100 };
    }
  
    saveProgress() {
      localStorage.setItem('courseProgress', JSON.stringify(this.progress));
      this.updateProgressBar();
    }
  
    updateProgressBar() {
      const percent = (this.progress.completed / this.progress.total) * 100;
      document.querySelector('.progress-fill').style.width = `${percent}%`;
      document.querySelector('.progress-text').textContent = `${Math.round(percent)}% Complete`;
    }
  
    completeSection(moduleId, sectionIndex) {
      const module = this.modules.find(m => m.id === moduleId);
      if (!module) return false;
  
      if (!module.sectionsCompleted) {
        module.sectionsCompleted = [];
      }
  
      // Check if section is already completed
      if (module.sectionsCompleted.includes(sectionIndex)) {
        return false;
      }
  
      // Add section to completed list
      module.sectionsCompleted.push(sectionIndex);
      
      // Check if all sections are completed
      if (module.sectionsCompleted.length === module.sections.length) {
        module.completed = true;
      }
  
      // Save progress
      this.saveModuleProgress();
      this.saveProgress();
  
      // Update study time
      this.stopModuleTimer();
      this.startModuleTimer(moduleId);
  
      return true;
    }
  
    calculateQuizGrade(quiz) {
      const totalPossiblePoints = quiz.questions.length * 2; 
      const earnedPoints = quiz.questions.reduce((sum, q) => sum + (q.points || 0), 0);
      return Math.round((earnedPoints / totalPossiblePoints) * 100);
    }
  
    getCompetencyFeedback() {
      const feedback = {
        strengths: [],
        improvements: [],
        nextSteps: []
      };
  
      // Analyze module performance
      this.modules.forEach(module => {
        const moduleScore = this.userProgress.moduleScores[module.id];
        const timeSpent = this.getModuleTimeSpent(module.id);
        const avgTimeForModule = module.duration.includes('hour') ? 
          parseInt(module.duration) * 60 : 
          parseInt(module.duration);
        
        // Check completion and performance
        if (module.completed && moduleScore >= 90) {
          feedback.strengths.push({
            text: `Excellent mastery of ${module.title} (${moduleScore}%)`,
            detail: `Completed all sections with high accuracy`
          });
        } else if (module.completed && moduleScore >= 80) {
          feedback.strengths.push({
            text: `Strong understanding of ${module.title} (${moduleScore}%)`,
            detail: `Good performance across module content`
          });
        } else if (moduleScore && moduleScore < 70) {
          feedback.improvements.push({
            text: `Additional practice needed in ${module.title}`,
            detail: `Current score: ${moduleScore}% (target: ${this.userProgress.passingScore}%)`
          });
        }
  
        // Time-based analysis
        if (timeSpent > avgTimeForModule * 1.5) {
          feedback.improvements.push({
            text: `Taking longer than expected on ${module.title}`,
            detail: `Consider reviewing prerequisites or seeking additional help`
          });
        } else if (timeSpent < avgTimeForModule * 0.5 && !module.completed) {
          feedback.improvements.push({
            text: `Quick progression through ${module.title}`,
            detail: `Ensure thorough understanding before moving forward`
          });
        }
  
        // Section completion analysis
        const completedSections = module.sectionsCompleted?.length || 0;
        const totalSections = module.sections.length;
        const completionRate = (completedSections / totalSections) * 100;
  
        if (completionRate > 0 && completionRate < 100) {
          feedback.nextSteps.push({
            text: `Complete remaining sections in ${module.title}`,
            detail: `${completedSections}/${totalSections} sections completed`
          });
        }
      });
  
      // Analyze learning patterns
      const consecutiveCompleted = this.findConsecutiveCompletedModules();
      if (consecutiveCompleted >= 2) {
        feedback.strengths.push({
          text: 'Consistent Learning Progress',
          detail: `Completed ${consecutiveCompleted} modules in sequence`
        });
      }
  
      // Quiz performance patterns
      const quizPerformance = this.analyzeQuizPerformance();
      Object.entries(quizPerformance).forEach(([topic, performance]) => {
        if (performance.attempts > 1 && performance.improving) {
          feedback.strengths.push({
            text: `Showing improvement in ${topic}`,
            detail: 'Score increasing with each attempt'
          });
        } else if (performance.attempts > 1 && !performance.improving) {
          feedback.improvements.push({
            text: `Difficulty with ${topic} concepts`,
            detail: 'Consider reviewing module material'
          });
        }
      });
  
      // Time management analysis
      const studyPatterns = this.analyzeStudyPatterns();
      if (studyPatterns.consistent) {
        feedback.strengths.push({
          text: 'Consistent Study Habits',
          detail: `Regular learning sessions averaging ${studyPatterns.avgDuration} minutes`
        });
      } else {
        feedback.improvements.push({
          text: 'Irregular Study Pattern',
          detail: 'Consider establishing a regular study schedule'
        });
      }
  
      // Generate personalized recommendations
      this.generatePersonalizedRecommendations(feedback);
  
      // Prioritize and limit feedback items
      feedback.strengths = this.prioritizeFeedback(feedback.strengths, 3);
      feedback.improvements = this.prioritizeFeedback(feedback.improvements, 3);
      feedback.nextSteps = this.prioritizeFeedback(feedback.nextSteps, 3);
  
      return feedback;
    }
  
    findConsecutiveCompletedModules() {
      let consecutive = 0;
      let maxConsecutive = 0;
      
      this.modules.forEach(module => {
        if (module.completed) {
          consecutive++;
          maxConsecutive = Math.max(maxConsecutive, consecutive);
        } else {
          consecutive = 0;
        }
      });
      
      return maxConsecutive;
    }
  
    analyzeQuizPerformance() {
      const performance = {};
      
      Object.entries(this.quizzes).forEach(([moduleId, quiz]) => {
        if (quiz.grade) {
          const module = this.modules[moduleId];
          performance[module.title] = {
            attempts: quiz.questions.reduce((max, q) => Math.max(max, q.attempts), 0),
            improving: this.isScoreImproving(moduleId),
            avgScore: quiz.grade
          };
        }
      });
      
      return performance;
    }
  
    isScoreImproving(moduleId) {
      // This would ideally use historical quiz attempts data
      // For now, we'll use a simple implementation
      const quiz = this.quizzes[moduleId];
      if (!quiz) return false;
      
      return quiz.questions.some(q => q.attempts > 1 && q.points > 0);
    }
  
    analyzeStudyPatterns() {
      const sessions = Object.values(this.moduleTimers.moduleTime);
      
      if (sessions.length === 0) {
        return { consistent: false, avgDuration: 0 };
      }
      
      const avgDuration = Math.floor(
        sessions.reduce((sum, time) => sum + time, 0) / sessions.length / 60000
      ); // Convert to minutes
      
      // Consider pattern consistent if there are regular study sessions
      const consistent = sessions.length >= 3 && avgDuration > 15;
      
      return {
        consistent,
        avgDuration,
      };
    }
  
    generatePersonalizedRecommendations(feedback) {
      // Current module recommendations
      const currentModule = this.modules[this.currentModule];
      if (currentModule) {
        feedback.nextSteps.push({
          text: `Focus on ${currentModule.title}`,
          detail: 'Complete current module before moving forward'
        });
      }
  
      // Based on performance trends
      const lowPerformanceModules = Object.entries(this.userProgress.moduleScores)
        .filter(([_, score]) => score < 70)
        .map(([moduleId]) => this.modules[moduleId].title);
        
      if (lowPerformanceModules.length > 0) {
        feedback.nextSteps.push({
          text: 'Review Challenging Topics',
          detail: `Focus on: ${lowPerformanceModules.join(', ')}`
        });
      }
  
      // Based on learning style
      if (this.enhancedAnalytics.learningStyle) {
        const style = this.enhancedAnalytics.learningStyle;
        const dominantStyle = Object.entries(style)
          .reduce((a, b) => a[1] > b[1] ? a : b)[0];
          
        feedback.nextSteps.push({
          text: 'Optimize Your Learning',
          detail: this.getLearningStyleRecommendation(dominantStyle)
        });
      }
    }
  
    getLearningStyleRecommendation(style) {
      const recommendations = {
        visual: 'Use diagrams and code visualization tools',
        auditory: 'Explain concepts aloud and participate in discussions',
        kinesthetic: 'Practice with hands-on coding exercises',
        readWrite: 'Take detailed notes and document your code'
      };
      
      return recommendations[style] || 'Use varied learning approaches';
    }
  
    prioritizeFeedback(items, limit) {
      // Sort by importance/relevance
      const prioritized = items.sort((a, b) => {
        // Prioritize current module feedback
        const currentModuleA = a.text.includes(this.modules[this.currentModule]?.title);
        const currentModuleB = b.text.includes(this.modules[this.currentModule]?.title);
        
        if (currentModuleA !== currentModuleB) {
          return currentModuleA ? -1 : 1;
        }
        
        // Then prioritize by recency/urgency
        return 0; // Could be enhanced with timestamps or priority scores
      });
      
      return prioritized.slice(0, limit);
    }
  
    evaluateCodingChallenge(moduleId, challengeIndex, code) {
      const challenge = this.codingChallenges[moduleId]?.[challengeIndex];
      if (!challenge) return null;
  
      try {
        // Create sandbox environment 
        const sandbox = {
          console: {
            log: (...args) => sandbox.output.push(...args.map(String))
          },
          output: []
        };
  
        // Run user code in sandbox
        new Function('sandbox', `
          with (sandbox) {
            ${code}
            ${this.generateTestCode(challenge.testCases)}
          }
        `)(sandbox);
  
        // Compare outputs
        const passed = this.compareOutputs(sandbox.output, challenge.testCases);
        
        return {
          passed,
          output: sandbox.output,
          expectedOutput: challenge.testCases[0].expectedOutput,
          hint: !passed ? challenge.hint : null
        };
      } catch (error) {
        return {
          passed: false,
          error: error.message,
          hint: challenge.hint
        };
      }
    }
  
    generateTestCode(testCases) {
      return testCases.map(test => `
        console.log(${JSON.stringify(test.input)});
      `).join('\n');
    }
  
    compareOutputs(actual, testCases) {
      const expected = testCases[0].expectedOutput;
      if (actual.length !== expected.length) return false;
      return actual.every((output, i) => String(output) === String(expected[i]));
    }
  
    initializeAnalytics() {
      // Initialize study times for each module
      this.modules.forEach(module => {
        this.enhancedAnalytics.studyTimeByModule[module.id] = {
          total: 0,
          sessions: [],
          average: 0
        };
      });
  
      // Initial learning style assessment
      this.analyzeLearningStyle();
    }
  
    analyzeLearningStyle() {
      const patterns = this.detectLearningPatterns();
      const style = {
        visual: patterns.visualScore,
        auditory: patterns.auditoryScore,
        kinesthetic: patterns.kinestheticScore,
        readWrite: patterns.readWriteScore
      };
      
      this.enhancedAnalytics.learningStyle = style;
      return style;
    }
  
    detectLearningPatterns() {
      // Analyze user interaction patterns
      return {
        visualScore: 0.8,
        auditoryScore: 0.6,
        kinestheticScore: 0.9,
        readWriteScore: 0.7
      };
    }
  
    updateStudyStreak() {
      const today = new Date();
      const lastStudy = this.studyPlan.lastStudyDate ? 
        new Date(this.studyPlan.lastStudyDate) : null;
  
      if (!lastStudy) {
        this.studyPlan.currentStreak = 1;
      } else {
        const diffDays = Math.floor((today - lastStudy) / (1000 * 60 * 60 * 24));
        if (diffDays <= 1) {
          this.studyPlan.currentStreak++;
        } else {
          this.studyPlan.currentStreak = 1;
        }
      }
  
      this.studyPlan.lastStudyDate = today.toISOString();
      this.saveStudyPlan();
    }
  
    addNote(moduleId, content, tags = []) {
      const note = {
        id: Date.now(),
        moduleId,
        content,
        tags,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
  
      if (!this.notes.byModule[moduleId]) {
        this.notes.byModule[moduleId] = [];
      }
  
      this.notes.byModule[moduleId].push(note);
      tags.forEach(tag => this.notes.tags.add(tag));
      this.updateNoteSearchIndex(note);
      this.saveNotes();
      return note;
    }
  
    createFlashcard(moduleId, front, back, tags = []) {
      const card = {
        id: Date.now(),
        moduleId,
        front,
        back,
        tags,
        createdAt: new Date().toISOString(),
        reviewCount: 0,
        nextReview: new Date().toISOString()
      };
  
      if (!this.flashcards.decks[moduleId]) {
        this.flashcards.decks[moduleId] = [];
      }
  
      this.flashcards.decks[moduleId].push(card);
      this.saveFlashcards();
      return card;
    }
  
    updateCertificationProgress(moduleId) {
      const certification = this.certifications.inProgress.find(
        cert => cert.moduleId === moduleId
      );
  
      if (certification) {
        certification.progress = this.calculateModuleProgress(moduleId);
        if (certification.progress >= 100) {
          this.completeCertification(moduleId);
        }
        this.saveCertifications();
      }
    }
  
    completeCertification(moduleId) {
      const certification = {
        id: Date.now(),
        moduleId,
        completedAt: new Date().toISOString(),
        grade: this.userProgress.moduleScores[moduleId] || 0,
        verificationCode: this.generateVerificationCode()
      };
  
      this.certifications.completed.push(certification);
      this.certifications.inProgress = this.certifications.inProgress.filter(
        cert => cert.moduleId !== moduleId
      );
      this.saveCertifications();
      return certification;
    }
  
    generateVerificationCode() {
      return 'CERT-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }
  
    // Save methods
    saveStudyPlan() {
      localStorage.setItem('studyPlan', JSON.stringify(this.studyPlan));
    }
  
    saveNotes() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    }
  
    saveFlashcards() {
      localStorage.setItem('flashcards', JSON.stringify(this.flashcards));
    }
  
    saveCertifications() {
      localStorage.setItem('certifications', JSON.stringify(this.certifications));
    }
  
    // Load methods
    loadStudyPlan() {
      const saved = localStorage.getItem('studyPlan');
      if (saved) {
        this.studyPlan = JSON.parse(saved);
      }
    }
  
    loadNotes() {
      const saved = localStorage.getItem('notes');
      if (saved) {
        this.notes = JSON.parse(saved);
      }
    }
  
    loadFlashcards() {
      const saved = localStorage.getItem('flashcards');
      if (saved) {
        this.flashcards = JSON.parse(saved);
      }
    }
  
    loadCertifications() {
      const saved = localStorage.getItem('certifications');
      if (saved) {
        this.certifications = JSON.parse(saved);
      }
    }
  
    loadModuleTimers() {
      const saved = localStorage.getItem('moduleTimers');
      if (saved) {
        this.moduleTimers.moduleTime = JSON.parse(saved);
      }
    }
  
    startModuleTimer(moduleId) {
      if (this.moduleTimers.currentModule !== moduleId) {
        this.stopModuleTimer();
        
        this.moduleTimers.currentModule = moduleId;
        this.moduleTimers.startTime = Date.now();
      }
    }
  
    stopModuleTimer() {
      if (this.moduleTimers.currentModule !== null && this.moduleTimers.startTime) {
        const timeSpent = Date.now() - this.moduleTimers.startTime;
        const moduleId = this.moduleTimers.currentModule;
        
        if (!this.moduleTimers.moduleTime[moduleId]) {
          this.moduleTimers.moduleTime[moduleId] = 0;
        }
        
        this.moduleTimers.moduleTime[moduleId] += timeSpent;
        this.moduleTimers.currentModule = null;
        this.moduleTimers.startTime = null;
        
        this.saveModuleTimers();
      }
    }
  
    getModuleTimeSpent(moduleId) {
      return this.moduleTimers.moduleTime[moduleId] || 0;
    }
  
    formatTimeSpent(milliseconds) {
      const seconds = Math.floor(milliseconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
  
      if (hours > 0) {
        return `${hours}h ${minutes % 60}m`;
      } else if (minutes > 0) {
        return `${minutes}m`;
      } else {
        return 'Less than 1m';
      }
    }
  
    saveModuleTimers() {
      localStorage.setItem('moduleTimers', JSON.stringify(this.moduleTimers.moduleTime));
    }
  
    pauseModuleTimer() {
      if (this.moduleTimers.currentModule !== null && this.moduleTimers.startTime) {
        this.stopModuleTimer();
      }
    }
  
    resumeModuleTimer(moduleId) {
      if (moduleId !== null) {
        this.startModuleTimer(moduleId);
      }
    }
  }