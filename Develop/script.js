// custom script for daily planner, TWH, 6-19-21

//global vars

    // where user enters in events (the textarea)
    var dailyEvent = $('.form-input');
    // this is colored section (the past, present, future areas)
    var savedEvent = $('.input-group');
    // saveBtn (blue)
    var saveBtn = $('.saveBtn');
    // string array for times (to associate with text input)
    var timesString = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
   

// loops through timesString array and attaches custom attribute
function attachTimes() {

    // for-loop to iterate through the timesString array
    for (var i = 0; i < timesString.length; i++) {
         // Assign style to the button
        dailyEvent.addClass('time-class');
        // Assign the text area to the data-time attribute
        dailyEvent.attr('time-attr', timesString[i]);
        console.log(timesString.length)
    }

}

// call to render on page refresh
renderLastEvent()
 
// Delegate event listener to saveBtn; isolate to specific section being typed in using code above
function saveEvent(event) {

    event.preventDefault()

    var typedEvent = $("input[name='form-input']").val();

    console.log(typedEvent)

    if (!typedEvent) {
        console.log('No event typed in');
        return;
      }

    var typedEventItem = $(
        '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
      );

    typedEventItem.text(typedEvent);
    
    // get time from clicked time's ave button w/ data-time attribute and use it for saving specific event
    // typedEvent.text($(event.target).attr('time-attr'));
  
    // print to the page
    savedEvent.append(typedEventItem)

    // set input to local storage using "key" as key
    localStorage.setItem("typedEvent", typedEvent);

    // if (savedEvent===null) {
    //put already saved events into local storage
    localStorage.setItem("savedEvent", savedEvent);
    // } else localStorage.setItem("savedEvent", JSON.stringify(savedEvent));


    // renderLastEvent()

    attachTimes()

}

dailyEvent.on('click', 'saveBtn', saveEvent);

// get items entered from local storage, so events persist through browser reload events
// $(window).bind('beforeunload',function(){

//     renderLastEvent()

//    return 'Are you sure you want to leave?';

// });

//get items from local storage
function renderLastEvent() {
    var renderEvent= localStorage.getItem("typedEvent");

    // if (savedEvent===null) {
    var renderSaved = localStorage.getItem("savedEvent");
    // } else var renderSaved = JSON.parse(localStorage.getItem("savedEvent"));

     // prints to the page
     savedEvent.append(renderEvent);
     savedEvent.append(renderSaved);
}


//moment.js section:

// red = past; yellow = present; green = future; blue = save

// changing bg color plan:
    // create lets using jQuery syntax for 9, 10, 11a selectors; going to have to add specific 
    // class values in the HTML; set these variables as integer values (military time) then put into an array
    // use moment js to grab the current hour time in interger format (military time)
    // in an if statement go through the array and compared which values are greater
    // than the moment time, equal, and less than (by their index value)
    // then finally change the bg color of each using style property jQuery


// today's date in the following format: Saturday, July 4th 2011, 6:30 (top of page)
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

 // military time array (to associate current time and moment.js for changing bg color)
 
 var timesNumbers = [9, 10, 11, 12, 13, 14, 15, 16, 17]

 var hour = moment().format('H')

console.log(hour)

// var rootEl = document.getElementById("root");
var nine = $('#9');
var ten = $('#10');
var eleven = $('#11');
var twelve = $('#12');
var thirteen = $('#13');
var fourteen = $('#14');
var fifteen = $('#15');
var sixteen = $('#16');
var seventeen = $('#15');

var timesNumber = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen]

console.log(timesNumber[1])








 





    
