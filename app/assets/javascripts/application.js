//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require slider
//= require moment
//= require fullcalendar
//= require_self

var startTheParty = function() {
  console.log('it works!');
  window.setTimeout(function() {
    $('#hello').modal('show');
  }, 1500);
};

var loadEvents = function() {
  $.getJSON('/events', function(events) {
    $('#calendar').fullCalendar({
      events: events,
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
};

$(function() {
  loadEvents();

  $( "#slider-range-min" ).slider({
    range: "min",
    value: 37,
    min: 1,
    max: 700,
    slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );


  // $.getJSON('/places', function(data) {
  //   console.log(data);
  // });
  //
  // $.getJSON('/restaurants', function(restaurants) {
  //   $(restaurants).each(function(index, restaurants) {
  //     $('#restaurants').append('<p>' + restaurant.name + '</p>');
  //   });
  // });

  var $form = $('form#new_event');

  $('input.btn', $form).click(function() {
    $.post($form.attr('action'), $form.serialize(), function(data) {
      console.log(data);
      console.log('Event created');
      $('#create-event').modal('hide');
      $('#calendar').html('');
      
    });
    return false;
  });
});
