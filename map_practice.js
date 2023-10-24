const chai = require('chai');
const expect = chai.expect;

// Array Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// String Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Iterator Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator
// Standard built-in objects docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

describe('.map Practice', function() {
  let numbers, doubles, squares, names, lengths, zipCode, backwards, words, withoutVowels, animals, trimmed, capitalizedNames;

  it('Double Numbers', function() {
    // This one's on the house 😉
    numbers = [1, 2, 3, 4, 5];
    doubles = numbers.map(number => number * 2);
    expect(doubles).to.deep.equal([2, 4, 6, 8, 10]);
  });

  it.skip('Square Numbers', function() {
    numbers = [1, 2, 3, 4, 5];
    // Your solution here
    expect(squares).to.deep.equal([1, 4, 9, 16, 25]);
  });

  it.skip('Get Lengths of Names', function() {
    names = ["alice", "bob", "charlie", "david", "eve"];
    // Your solution here
    expect(lengths).to.deep.equal([5, 3, 7, 5, 3]);
  });

  it.skip('Normalize Zip Codes', function() {
    numbers = [234, 10, 9119, 38881];
    // Your solution here
    expect(zipCode).to.deep.equal(["00234", "00010", "09119", "38881"]);
  });

  it.skip('Reverse Names', function() {
    names = ["alice", "bob", "charlie", "david", "eve"];
    // Your solution here
    expect(backwards).to.deep.equal(["ecila", "bob", "eilrahc", "divad", "eve"]);
  });

  it.skip('Remove Vowels from Words', function() {
    words = ["green", "sheep", "travel", "least", "boat"];
    // Your solution here
    expect(withoutVowels).to.deep.equal(["grn", "shp", "trvl", "lst", "bt"]);
  });

  it.skip('Trim Last Letter from Animal Names', function() {
    animals = ["dog", "cat", "mouse", "frog", "platypus"];
    // Your solution here
    expect(trimmed).to.deep.equal(["do", "ca", "mous", "fro", "platypu"]);
  });

  it.skip('Capitalize Names', function() {
    names = ["alice", "bob", "charlie"];
    // Your solution here
    expect(capitalizedNames).to.deep.equal(["Alice", "Bob", "Charlie"]);
  });




  /*
███████╗ ██████╗ ██╗     ██╗   ██╗████████╗██╗ ██████╗ ███╗   ██╗███████╗       
██╔════╝██╔═══██╗██║     ██║   ██║╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝    ██╗
███████╗██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██╔██╗ ██║███████╗    ╚═╝
╚════██║██║   ██║██║     ██║   ██║   ██║   ██║██║   ██║██║╚██╗██║╚════██║    ██╗
███████║╚██████╔╝███████╗╚██████╔╝   ██║   ██║╚██████╔╝██║ ╚████║███████║    ╚═╝
╚══════╝ ╚═════╝ ╚══════╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝       
  (Solutions)

  'Double Numbers'
  const numbers = [1, 2, 3, 4, 5];
  const doubles = numbers.map(number => number * 2);

  'Square Numbers'
  numbers = [1, 2, 3, 4, 5];
  const squares = numbers.map(number => number * number);

  'Get Lengths of Names'
  const names = ["alice", "bob", "charlie", "david", "eve"];
  const lengths = names.map(name => name.length);

  'Normalize Zip Codes'
  const numbers = [234, 10, 9119, 38881];
  const zipCode = numbers.map(num => num.toString().padStart(5, "0"));

  'Reverse Names'
  const names = ["alice", "bob", "charlie", "david", "eve"];
  const backwards = names.map(name => name.split('').reverse().join(''));

  'Trim Last Letter from Animal Names'
  'Remove Vowels from Words'
  const words = ["green", "sheep", "travel", "least", "boat"];
  const withoutVowels = words.map(word => word.replace(/[aeiou]/g, ''));

  'Remove Vowels from Words'
  const animals = ["dog", "cat", "mouse", "frog", "platypus"];
  const trimmed = animals.map(animal => animal.slice(0, -1));

  'Capitalize Names'
  const names = ["alice", "bob", "charlie"];
  const capitalizedNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
  */
});
