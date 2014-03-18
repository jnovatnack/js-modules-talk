CurrencyFormatter = function() {
};

CurrencyFormatter.prototype.format = function(amount, countryCode) {
	// ...
  if (countryCode === 'US') {
    return "$" + Number(amount).toFixed(2) + " USD";	
  }
};

DaysOfWeekFormatter = function() {
	//
}