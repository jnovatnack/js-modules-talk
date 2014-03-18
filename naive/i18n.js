var i18n = (function() {
  return {
    Calendar : function() {
      this.daysOfWeek = function(countryCode) {
        if (countryCode === 'US') {
          return calendar.daysOfWeekUS();
        }
      };
    }
  };
})();
