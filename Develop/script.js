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



    
