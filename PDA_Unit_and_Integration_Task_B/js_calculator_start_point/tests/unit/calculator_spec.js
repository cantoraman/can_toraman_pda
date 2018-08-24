var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('should add 1 to 4 and get 5', function(){
    calculator.previousTotal=4;
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5);
  });

  it('should subtract 4 from 7 and get 3', function(){
    calculator.previousTotal=7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  });

  it('should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal=3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  });

  it('should divide 21 by 7 and get 3', function(){
    calculator.previousTotal=21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  });
  
  it('should concatanate 3 and 5 when clicked one after other to display 35', function(){
    calculator.numberClick(3);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 35);
  });

  it('should chain 2 times 4 plus 3 to give out a result of 11', function(){
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(3);
    calculator.operatorClick("=");

    assert.equal(calculator.runningTotal, 11);
  });

  it('clear the running total without affecting the calculation', function(){
    calculator.numberClick(4);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(9);
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick("=");
    assert.equal(calculator.runningTotal, 3);
  });

});
