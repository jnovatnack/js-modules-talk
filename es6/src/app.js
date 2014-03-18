import { Calendar } from "./i18n";

window.displayAvailabilityCalendar = function() {
  alert("Displaying calendar with day ordering " +
        new Calendar().daysOfWeek("US"));
};
