const chai = require('chai');
const expect = chai.expect;

// Array Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// String Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Iterator Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator
// Standard built-in objects docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

describe('.reduce Practice', function() {
  let numbers, result;
  let keywords, phrase;
  let elements, matrix;

  it('Sums a list of numbers', function() {
    // This one's on the house 😉
    numbers = [32, 1, 21, 5, 81, 333];
    result = numbers.reduce((sum, number) => sum + number, 0);
    expect(result).to.equal(473);
  });

  it.skip('String concatenation', function() {
    words = ['Hello', ' ', 'world', '!'];
    // Your code here
    expect(result).to.equal('Hello world!');
  });

  it.skip('Subtracts a list of numbers', function() {
    numbers = [28, 12, 38, 1, 91];
    // Your code here
    expect(result).to.equal(-170);
  });

  it.skip('Adds all second values together', function() {
    elements = [["a", 1], ["b", 9], ["c", 21]];
    // Your code here
    expect(result).to.equal(31);
  });

  it.skip('Find the Longest Word', function() {
    words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];
    // Your code here
    expect(result).to.equal('banana');
  });

  it.skip('Remove Duplicates', function() {
    numbers = [1, 2, 2, 3, 4, 4, 4, 5];
    // Your code here
    expect(result).to.deep.equal([1, 2, 3, 4, 5]);
  });
  

  //SPICY SECTION 🌶️
  it.skip('Capitalize key words in phrase', function() {
    keywords = ["fish", "blue"];
    phrase = 'one fish two fish red fish blue fish';
    // Your code here
    expect(result).to.equal('one FISH two FISH red FISH BLUE FISH');
  });

  it.skip('Subtract smallest values from 100', function() {
    elements = [[8, 5, 3], [1, 9, 11], [4, 7, 2], [19, 34, 6]];
    // Your code here
    expect(result).to.equal(88);
  });

  it.skip('Sum of Diagonal Elements in a Matrix', function() {
    matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    // Your code here
    expect(result).to.equal(15);
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

  'String concatenation'
  result = words.reduce((acc, word) => acc + word, '');

  'Subtracts a list of numbers'
  result = numbers.reduce((difference, number) => difference - number, 0);

  'Adds all second values together'
  result = elements.reduce((sum, element) => sum + element[1], 0);

  'Find the Longest Word'
  result = words.reduce((longest, word) => {
      if (word.length > longest.length) {
        return word;
      }
      return longest;
    }, '');
  
  'Remove Duplicates'
  result = numbers.reduce((acc, num) => {
      if (!acc.includes(num)) {
        acc.push(num);
      }
      return acc;
    }, []);

  //SPICY SECTION 🌶️
  
  'Capitalize key words in phrase'
  result = keywords.reduce((newPhrase, keyword) => {
      return newPhrase.split(keyword).join(keyword.toUpperCase());
    }, phrase);
  
  'Subtract smallest values from 100'
  result = elements.reduce((difference, element) => {
      const minElementValue = element.reduce((min, current) => (current < min ? current : min), element[0]);
      return difference - minElementValue;
    }, 100);

  'Sum of Diagonal Elements in a Matrix'
  result = matrix.reduce((sum, row, index) => sum + row[index], 0);
*/