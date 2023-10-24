const chai = require('chai');
const expect = chai.expect;

// Array Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// String Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Iterator Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator
// Standard built-in objects docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

describe('.every Practice', function() {
  let numbers, result;

  it('Test All Zeroes', function() {
    // This one's on the house 😉
    numbers = [0, 0, 0, 0, 0, 0, 0];
    result = numbers.every((number) => number === 0);
    expect(result).to.equal(true);
  });

  xit('Not All Zeroes', function() {
    numbers = [0, 0, 0, 0, 1, 0, 0, 0];
    // Your code here
    expect(result).to.equal(false);
  });

  xit('All Gone', function() {
    words = ["gone", "gone", "gone", "gone", "gone", "gone", "gone"];
    // Your code here
    expect(result).to.equal(true);
  });

  xit('Not All Gone', function() {
    words = ["gone", "gone", "gone", "gone", "gone", "there", "gone", "gone"];
    // Your code here
    expect(result).to.equal(false);
  });

  xit('All Empty', function() {
    strings = ["", "", "", "", "", "", ""];
    // Your code here
    expect(result).to.equal(true);
  });

  xit('Not All Empty', function() {
    strings = ["", "", "", "full", "", "", ""];
    // Your code here
    expect(result).to.equal(false);
  });

  xit('Not All Uppercase', function() {
    words = ["DOUGHNUT", "CASH", "MAIN", "bOWl", "SMACK", "SAND"];
    // Your code here
    expect(result).to.equal(false);
  });

  xit('All Lies', function() {
    lies = [false, false, false, false];
    // Your code here
    expect(result).to.equal(true);
  });

  xit('Multiples of 7', function() {
    numbers = [42, 14, 35, 49, 28, 56, 21, 7];
    // Your code here
    expect(result).to.equal(true);
  });

  xit('Not All Three Digits Long', function() {
    numbers = [981, 831, 509, 332, 892, 8999, 110];
    // Your code here
    expect(result).to.equal(false);
  });

  xit('All Four Letter Words', function() {
    words = ["love", "hate", "fire", "bird", "call"];
    // Your code here
    expect(result).to.equal(true);
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

  'Not All Zeroes'
  result = numbers.every((number) => number === 0);

  'All Gone' & 'Not All Gone'
  result = words.every((word) => word === "gone");

  'All Empty' & 'Not All Empty'
  result = strings.every((str) => str === "");

  'Not All Uppercase'
  result = words.every((word) => word === word.toUpperCase());

  'All Lies'
  result = lies.every((lie) => lie === false);

  'Multiples of 7'
  result = numbers.every((number) => number % 7 === 0);

  'Not All Three Digits Long'
  result = numbers.every((number) => number.toString().length === 3);
  
  'All Four Letter Words'
  result = words.every((word) => word.length === 4);
*/