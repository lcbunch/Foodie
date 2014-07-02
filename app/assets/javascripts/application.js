//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require moment
//= require fullcalendar
//= require_self

var startTheParty = function() {
  console.log('it works!');
  window.setTimeout(function() {
    $('#hello').modal('show');
  }, 1500);
};

$(function() {
  $('#calendar').fullCalendar({
    header: {
      left: 'prev',
      center: 'title',
      right: 'next'
    },
    dayClick: function(date, jsEvent, view) {
      var today = (date.format('MMM Do YY'));
      $('#hello .modal-dialog .modal-content .modal-body p').replaceWith('<p>Today is '+today+'</p>');
      $('#hello').modal('show');
    }
  });
});
