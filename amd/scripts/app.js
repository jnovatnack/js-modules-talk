window.displayAvailabilityCalendar = function() {
  require(["i18n"], function(i18n) {
    alert("Displaying calendar with day ordering " +
      new i18n.Calendar().daysOfWeek("US"));
  });
}