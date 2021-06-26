// custom script for daily planner, TWH, 6-19-21

//global vars

    // where user enters in events (textarea)
    let dailyEvent = $('.form-input');
    // blue colored border box
    let savedEvent = $('.input-group');
    // saveBtns 
    let saveBtn9 = $('#save9');
    let saveBtn10 = $('#save10');
    let saveBtn11 = $('#save11');
    let saveBtn12 = $('#save12');
    let saveBtn13 = $('#save13');
    let saveBtn14 = $('#save14');
    let saveBtn15 = $('#save15');
    let saveBtn16 = $('#save16');
    let saveBtn17 = $('#save17');
    
  
// SECTION #1: handling user input and the save button(s); (as written not debugged correctly)
// individual save buttons based on specific id's get handled by saveEvent
saveBtn9.on('click', saveEvent)
saveBtn10.on('click', saveEvent)
saveBtn11.on('click', saveEvent)
saveBtn12.on('click', saveEvent)
saveBtn13.on('click', saveEvent)
saveBtn14.on('click', saveEvent)
saveBtn15.on('click', saveEvent)
saveBtn16.on('click', saveEvent)
saveBtn17.on('click', saveEvent)

// saves to local storage and appends event 
function saveEvent(event) {

    // convert button pressed (event target) to a jQuery DOM object
    var saveButtonClicked = $(event.target);

    // grabs input from user
    var typedEvent = $("input[name='form-input']").val();

    if (!typedEvent) {
        console.log('No event typed in');
      }

    // appends to near input group (blue section)
    saveButtonClicked.closest('input-group').append(typedEvent)

    // saves to local storage
    localStorage.setItem("savedEvent", typedEvent)

    renderLastEvent()
}

//gets items from local storage and appends to page
function renderLastEvent() {

    var renderSavedEvent = localStorage.getItem("savedEvent")

     savedEvent.append(renderSavedEvent);
}

// call to render on page refresh
renderLastEvent()

// user convenience to ensure that they clicked a save button before exiting/refreshing browser
$(window).bind('beforeunload',function(){

    renderLastEvent()

   return 'Are you sure you want to leave?';

});

//SECTION #2 >> moment.js & bg color section:

// red = past; yellow = present; green = future; blue = text input/save btn

// displays today's date in the following format: Saturday, July 4th 2011, 6:30 (top of page)
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

// declaring consts for time blocks, day status, and current moment hour
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
    
    //calling internal setBgColor fcn
    if (rowTime) {
        if (momentHour === rowTime) {
            setBgColor(hour, "rgb(219, 158, 4)");
        } else if (momentHour > rowTime) {
            setBgColor(hour, "rgb(172, 20, 20)"); 
        } else if (momentHour < rowTime) {
            setBgColor(hour, "rgba(0, 105, 0, 0.863)")
        }
    }

})

//changes bg color for a block of hour based on if statement above
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


















        







 






