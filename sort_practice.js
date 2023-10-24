const chai = require('chai');
const expect = chai.expect;

// Array Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// String Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Iterator Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator
// Standard built-in objects docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

describe('.sort Practice', function() {
  let numbers, sortedNumbers, words, sortedWords, prices, sortedPrices;

  it('Sort Numbers in Ascending Order', function() {
    // This one's on the house 😉
    numbers = [5, 1, 3, 4, 2];
    sortedNumbers = numbers.sort((a, b) => a - b);
    expect(sortedNumbers).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it.skip('Sort Numbers in Descending Order', function() {
    numbers = [5, 1, 3, 4, 2];
    // Your code here
    expect(sortedNumbers).to.deep.equal([5, 4, 3, 2, 1]);
  });

  it.skip('Sort Words Alphabetically', function() {
    words = ["banana", "cherry", "apple", "date"];
    // Your code here
    expect(sortedWords).to.deep.equal(["apple", "banana", "cherry", "date"]);
  });

  it.skip('Sort Words by Length', function() {
    words = ["banana", "cherry", "apple", "date"];
    // Your code here
    expect(sortedWords).to.deep.equal(["date", "apple", "banana", "cherry"]);
  });

  it.skip('Sort Prices in Ascending Order', function() {
    prices = [12.99, 9.95, 24.50, 7.25, 15.75];
    // Your code here
    expect(sortedPrices).to.deep.equal([7.25, 9.95, 12.99, 15.75, 24.50]);
  });

  it.skip('Sort Prices in Descending Order', function() {
    prices = [12.99, 9.95, 24.50, 7.25, 15.75];
    // Your code here
    expect(sortedPrices).to.deep.equal([24.50, 15.75, 12.99, 9.95, 7.25]);
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

  'Sort Numbers in Descending Order'
  sortedNumbers = numbers.sort((a, b) => b - a);

  'Sort Words Alphabetically'
  sortedWords = words.sort();

  'Sort Words by Length'
  sortedWords = words.sort((a, b) => a.length - b.length);

  'Sort Prices in Ascending Order'
  sortedPrices = prices.sort((a, b) => a - b);

  'Sort Prices in Descending Order'
  sortedPrices = prices.sort((a, b) => b - a);
*/