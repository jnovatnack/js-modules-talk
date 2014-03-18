var calendar = require("./calendar");
var log = require("console-browserify");

function Calendar() {
  this.daysOfWeek = function(countryCode) {
    if (countryCode === 'US') {
      return calendar.daysOfWeekUS();
    } else {
      log.error("Unsupported country code: " + countryCode);
    }
  };
}

exports.Calendar = Calendar;
