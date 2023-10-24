const chai = require('chai');
const expect = chai.expect;

// Array Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// String Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Iterator Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator
// Standard built-in objects docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

describe('.filter Practice', function() {
  let numbers, evens, selected, words, animals, elements, odds, dinosaurs, floats, arrays, filteredObjects;

  it('Even numbers', function() {
    // This one's on the house 😉
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    evens = numbers.filter(number => number % 2 === 0);
    expect(evens).to.deep.equal([2, 4, 6, 8, 10]);
  });

  it.skip('Odd numbers', function() {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Your code here
    expect(odds).to.deep.equal([1, 3, 5, 7, 9]);
  });

  it.skip('Words with three letters', function() {
    words = ["pill", "bad", "finger", "cat", "blue", "dog", "table", "red"];
    // Your code here
    expect(selected).to.deep.equal(["bad", "cat", "dog", "red"]);
  });

  it.skip('Words with more than three letters', function() {
    words = ["pill", "bad", "finger", "cat", "blue", "dog", "table", "red"];
    // Your code here
    expect(selected).to.deep.equal(["pill", "finger", "blue", "table"]);
  });

  it.skip('Words ending in e', function() {
    words = ["are", "you", "strike", "thinking", "belt", "piece", "warble", "sing", "pipe"];
    // Your code here
    expect(selected).to.deep.equal(["are", "strike", "piece", "warble", "pipe"]);
  });

  it.skip('Words ending in ing', function() {
    words = ["bring", "finger", "drought", "singing", "bingo", "purposeful"];
    // Your code here
    expect(selected).to.deep.equal(["bring", "singing"]);
  });

  it.skip('Words containing e', function() {
    words = ["four", "red", "five", "blue", "pizza", "purple"];
    // Your code here
    expect(selected).to.deep.equal(["red", "five", "blue", "purple"]);
  });

  it.skip('Dinosaurs', function() {
    animals = ["tyrannosaurus", "narwhal", "eel", "achillesaurus", "qingxiusaurus"];
    // Your code here
    expect(dinosaurs).to.deep.equal(["tyrannosaurus", "achillesaurus", "qingxiusaurus"]);
  });

  it.skip('Floats', function() {
    numbers = [3, 1.4, 3.5, 2, 4.9, 9.1, 8.4];
    // Your code here
    expect(floats).to.deep.equal([1.4, 3.5, 4.9, 9.1, 8.4]);
  });

  it.skip('Arrays', function() {
    elements = ["CAT", ["dog"], 23, [56, 3, 8], "AIMLESS", 43, "butter"];
    // Your code here
    expect(arrays).to.deep.equal([["dog"], [56, 3, 8]]);
  });

  it.skip('Objects', function() {
    elements = ["cat", { dog: "fido" }, 23, { stuff: "things" }, "aimless", 43];
    // Your code here
    expect(filteredObjects).to.deep.equal([{ dog: "fido" }, { stuff: "things" }]);
  });
});




/*
███████╗ ██████╗ ██╗     ██╗   ██╗████████╗██╗ ██████╗ ███╗   ██╗███████╗       
██╔════╝██╔═══██╗██║     ██║   ██║╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝    ██╗
███████╗██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██╔██╗ ██║███████╗    ╚═╝
╚════██║██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██║╚██╗██║╚════██║    ██╗
███████║╚██████╔╝███████╗╚██████╔╝   ██║   ██║╚██████╔╝██║ ╚████║███████║    ╚═╝
╚══════╝ ╚═════╝ ╚══════╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝       
  (Solutions)

  'Odd numbers'
  odds = numbers.filter(number => number % 2 !== 0);
  
  'Words with three letters'
  selected = words.filter(word => word.length === 3);

  'Words with more than three letters'
  selected = words.filter(word => word.length > 3);

  'Words ending in e'
  selected = words.filter(word => word.endsWith("e"));
  
  'Words ending in ing'
  selected = words.filter(word => word.endsWith("ing"));

  'Words containing e'
  selected = words.filter(word => word.includes("e"));

  'Dinosaurs'
  dinosaurs = animals.filter(animal => animal.includes("saurus"));

  'Floats'
  floats = numbers.filter(num => num % 1 !== 0);

  'Arrays'
  arrays = elements.filter(e => Array.isArray(e));

  'Objects'
  filteredObjects = elements.filter(element => typeof element === 'object' && !Array.isArray(element));

*/