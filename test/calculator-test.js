describe('Calculator', function() {

	/**
	 * Setup method. Initializes environment for each test.
	 */
	before(function() {
		this.aCalculator = new Calculator();
	});

	describe('Adding', function() {

		it("should throw an error if a non-numeric value is used", function() {
			expect(this.calculator.add.bind(this.aCalculator, 2, 'a')).to.throw();
		});

	});

});
