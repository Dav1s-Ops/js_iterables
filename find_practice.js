const chai = require('chai');
const expect = chai.expect;

describe('.find Practice', function() {
  let words, numbers, found;

  it('First seven letter word', function() {
    // This one's on the house 😉
    words = ["capricious", "berry", "unicorn", "bag", "apple", "festering", "pretzel", "pencil"];
    found = words.find(word => word.length === 7);
    expect(found).to.equal("unicorn");
  });

  xit('No waldo', function() {
    words = ["scarf", "sandcastle", "flag", "pretzel", "crow", "key"];
    // Your code here
    expect(found).to.be.undefined;
  });

  xit('Found waldo', function() {
    words = ["noise", "dog", "fair", "house", "waldo", "bucket", "fish"];
    // Your code here
    expect(found).to.equal("waldo");
  });

  xit('No three letter words', function() {
    words = ["piglet", "porridge", "bear", "blueberry"];
    // Your code here
    expect(found).to.be.undefined;
  });

  xit('Find 13', function() {
    numbers = [2, 13, 19, 8, 3, 27];
    // Your code here
    expect(found).to.equal(13);
  });

  xit('Find first even number', function() {
    numbers = [3, 7, 13, 11, 10, 2, 17];
    // Your code here
    expect(found).to.equal(10);
  });

  xit('First multiple of 3', function() {
    numbers = [2, 8, 9, 27, 24, 5];
    // Your code here
    expect(found).to.equal(9);
  });

  xit('First word starting with q', function() {
    words = ["weirdo", "quill", "fast", "quaint", "quitter", "koala"];
    // Your code here
    expect(found).to.equal("quill");
  });

  xit('First word ending with er', function() {
    words = ["biggest", "pour", "blight", "finger", "pie", "border"];
    // Your code here
    expect(found).to.equal("finger");
  });

  xit('First number greater than 20', function() {
    numbers = [1, 8, 19, 21, 29, 31, 34];
    // Your code here
    expect(found).to.equal(21);
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

  'No waldo' & 'Found Waldo'
  found = words.find(word => word.includes("waldo"));

  'No three letter words'
  found = words.find(word => word.length === 3);

  'Find 13'
  found = numbers.find(num => num === 13);

  'Find first even number'
  found = numbers.find(n => n % 2 === 0);

  'First multiple of 3'
  found = numbers.find(num => num % 3 === 0);

  'First word starting with q'
  found = words.find(word => word.startsWith("q"));

  'First word ending with er'
  found = words.find(w => w.endsWith("er"));

  'First number greater than 20'
  found = numbers.find(num => num > 20);
*/