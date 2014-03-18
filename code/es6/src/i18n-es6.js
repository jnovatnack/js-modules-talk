import { daysOfWeekUS } from "calendar";

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
};
DaysOfWeekFormatter.prototype.orderedDayNames = function(countryCode) {
	return calendar.daysOfWeekUS();
};

export { CurrencyFormatter, DaysOfWeekFormatter };