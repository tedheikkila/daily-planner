// custom script for daily planner, TWH, 6-19-21

//global vars

    // where user enters in events (the textarea)
    let dailyEvent = $('.form-input');
    // this is colored section (the past, present, future areas)
    let savedEvent = $('.input-group');
    // this is for past, present, and future text
    let timeState = $('.input.group-text')
    // saveBtn (blue)
    let saveBtn = $('.saveBtn');


// SECTION #1: handling user input and the save button(s):  
    
    const timesString = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]  // string array for times (associated with text input)
  
   

// loops through timesString array and attaches custom attribute
function attachTimes() {

    // for-loop to iterate through the timesString array
    for (var i = 0; i < timesString.length; i++) {
        // Assign the text area to the data-time attribute
        dailyEvent.attr('time-attr', timesString[i]);
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

    // savedEvent.append("")
    console.log(savedEvent)

    // set input to local storage using "key" as key
    // localStorage.setItem("typedEvent", typedEvent);
    localStorage.setItem("savedEvent", typedEvent)


    renderLastEvent()

    attachTimes()

}

saveBtn.on('click', saveEvent);


//get items from local storage
function renderLastEvent() {

    var renderSavedEvent = localStorage.getItem("savedEvent")
    //var renderSavedEvent = JSON.parse(localStorage.getItem("savedEvent"));

     savedEvent.append(renderSavedEvent);
}









// user convenience to ensure that they clicked a save button before exiting/refreshing browser
// maintain this and uncomment later
// $(window).bind('beforeunload',function(){

//     renderLastEvent()

//    return 'Are you sure you want to leave?';

// });









//SECTION #2 >> moment.js & bg color section:

// red = past; yellow = present; green = future; blue = text input/save btn

// displays today's date in the following format: Saturday, July 4th 2011, 6:30 (top of page)
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

// declaring consts for 
const hourBlock = document.getElementsByClassName("hourBlock")
const hourStatus = document.getElementsByClassName("input-group-text")
let momentHour = parseInt(moment().format('H'));

// changes bg color of time block
Array.from(hourBlock).forEach( hour => {
    let 
        hourString = hour.id, rowTime;
    if (hourString) {
        rowTime = parseInt(hourString);
    }
    
    //calling internal setBgcolor fcn
    if (rowTime) {
        if (momentHour === rowTime) {
            setBgColor(hour, "yellow");
        } else if (momentHour > rowTime) {
            setBgColor(hour, "red"); 
        } else if (momentHour < rowTime) {
            setBgColor(hour, "green")
        }
    }

})

//changes bg color for a block of hour
function setBgColor (hour, color) {
    hour.style.backgroundColor = color;
}

// changes time status for input group text
Array.from(hourStatus).forEach( status => {
    let 
        statusString = status.id, rowTime;
    if (statusString) {
        rowTime = parseInt(statusString);
    }

    //calling in internal changeText fcn
    if (rowTime) {
        if (momentHour === rowTime) {
            changeText(status, "Present");
        } else if (momentHour > rowTime) {
            changeText(status, "Past"); 
        } else if (momentHour < rowTime) {
            changeText(status, "Future")
        }
    }

})

//change status of text using this fcn
function changeText (status, text) {
    status.textContent = text
}


















        







 






