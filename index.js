// Define basic math functions
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }
  
  // Jasmine test suite
  describe('basic math functions', function () {
    it("'add()' is a valid function", function () {
      expect(add).toBeDefined();
    });
  
    it("'subtract()' is a valid function", function () {
      expect(subtract).toBeDefined();
    });
  
    it("'multiply()' is a valid function", function () {
      expect(multiply).toBeDefined();
    });
  
    it("'divide()' is a valid function", function () {
      expect(divide).toBeDefined();
    });
  
    it('add(a, b) adds two numbers and returns the result', function () {
      const a = 5;
      const b = 3;
      expect(add(a, b)).toEqual(a + b);
    });
  
    it('subtract(a, b) subtracts b from a and returns the result', function () {
      const a = 10;
      const b = 4;
      expect(subtract(a, b)).toEqual(a - b);
    });
  
    it('multiply(a, b) multiplies two numbers and returns the result', function () {
      const a = 7;
      const b = 2;
      expect(multiply(a, b)).toEqual(a * b);
    });
  
    it('divide(a, b) divides a by b and returns the result', function () {
      const a = 12;
      const b = 3;
      expect(divide(a, b)).toEqual(a / b);
    });
  
    it('increment(n) increments n and returns the result', function () {
      const n = 8;
      expect(increment(n)).toEqual(n + 1);
    });
  
    it('decrement(n) decrements n and returns the result', function () {
      const n = 6;
      expect(decrement(n)).toEqual(n - 1);
    });
  });
  // Define the makeInt function
function makeInt(n) {
    return parseInt(n, 10);
  }
  
  // Define the preserveDecimal function
  function preserveDecimal(n) {
    return parseFloat(n);
  }
  
  // Jasmine test suite for makeInt
  describe('makeInt(n)', function() {
    it('parses n as an integer and returns the parsed integer', function() {
      const a = 42;
      expect(makeInt(a.toString())).toEqual(a);
    });
  
    it('assumes base 10', function() {
      expect(makeInt('0x2328')).toEqual(0);
    });
  
    it('returns NaN as appropriate', function() {
      expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true);
    });
  });
  
  // Jasmine test suite for preserveDecimal
  describe('preserveDecimal(n)', function() {
    it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
      expect(preserveDecimal('2.222')).toBe(2.222);
    });
  
    it('returns NaN as appropriate', function() {
      expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true);
    });
  });
  