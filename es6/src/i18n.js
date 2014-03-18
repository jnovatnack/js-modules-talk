import { daysOfWeekUS } from "./calendar";

function Calendar() {
  this.daysOfWeek = function(countryCode) {
    if (countryCode === 'US') {
      return daysOfWeekUS();
    }
  };
}

export { Calendar };
