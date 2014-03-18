var Calendar = require("./i18n").Calendar;

global.displayAvailabilityCalendar = function() {
  alert("Displaying calendar with day ordering " +
        new Calendar().daysOfWeek(document.getElementById("country-code").value));
};
