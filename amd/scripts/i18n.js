define(["calendar"], function(calendar) {
   return {
    Calendar : function() {
      this.daysOfWeek = function(countryCode) {
        if (countryCode === 'US') {
          return calendar.daysOfWeekUS();
        }
      };
    }
  };
});
