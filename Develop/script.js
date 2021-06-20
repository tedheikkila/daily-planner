// custom script for daily planner, TWH, 6-19-21

// today's date in the following format: Saturday, July 4th 2011, 6:30 (top of page)
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

// plan:
    //1. need to use jQuery and moment.js to determine how bg colors on time rows (if structure)
        //less than current time then gray; current = red; greater than = green (on page refresh)
    //2. need to capture text entered as input in text area
    //3. need forEach click event for every save btn (one function)
    //4. capture this text and JSON stringify set into local storage
    //5. get from local storage and render onto hour type into; input fields required for each row

// selectors/global vars: row bg color; input text; local storage variables; time at moment X
//                          save btn

// challenges: changing row bg color based on current time; setting/getting from local storage

// red = past; blue = present; green = future hour

// changing bg color plan:
    // create lets using jQuery syntax for 9, 10, 11a selectors; going to have to add specific 
    // class values in the HTML; set these variables as integer values (military time) then put into an array
    // use moment js to grab the current hour time in interger format (military time)
    // in an if statement go through the array and compared which values are greater
    // than the moment time, equal, and less than (by their index value)
    // then finally change the bg color of each using style property jQuery

// save text input plan:
    // JSON stringify the user's text value upon a forEach click event for the save button(s)
    // store in local storage
    // parse out using JSON and render onto the page. if content is already there then append the 
    // string to pre-existing text 
    // after page refresh the rendered content should persist



    
