var expect = require('chai').expect;

var Calculator = require('../src/calculator.js');


describe('Calculator', function() {

	/**
	 * Setup method. Initializes environment for each test.
	 */
	before(function() {
		this.aCalculator = new Calculator.Calculator();
	});

	describe('Adding', function() {

		it("should throw an error if a non-numeric value is used", function() {
			expect(this.aCalculator.add.bind(this.aCalculator, 2, 'a')).to.throw();
		});

		it("should throw an error if less than 2 values are provided", function() {
			expect(this.aCalculator.add.bind(this.aCalculator, 1)).to.throw();
		});

	});

});
