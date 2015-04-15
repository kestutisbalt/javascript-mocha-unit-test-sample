function Calculator() {}

Calculator.prototype._validate = function(values) {
	var valuesCount = values.length;
	var numbers = values.filter(Number);

	if (valuesCount !== numbers.length) {
		throw new Error("All values must be numeric");
	}

	return values;
}

Calculator.prototype.add = function() {
	var values = this._validate([].slice.apply(arguments));

	if (values.length < 2) {
		throw new Error('Add requires a minimum of two arguments but ' +
			values.length + 'given.');
	}

	return values.reduce(function(previousValue, currentValue) {
		return previousValue + currentValue;
	});
}


module.exports.Calculator = Calculator;
