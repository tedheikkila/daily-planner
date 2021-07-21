// custom script for daily planner, TWH, 6-19-21

//global vars

let saveBtn = $('.save-btn')

// handles textareas and save btns
saveBtn.on("click", function (event) {

    // captures click event using "this"
    let btnData = $(this).attr("data-time");

    // captures text
    let textTarget = $("#text" + btnData);

    // sets into local storage w/key = "id"
    localStorage.setItem(textTarget.attr("id"), textTarget.val());
});

// first #text refers to HTML text area element; second #text refers to localStorage value
$("#text9").text(localStorage.getItem("text9"));
$("#text10").text(localStorage.getItem("text10"));
$("#text11").text(localStorage.getItem("text11"));
$("text12").text(localStorage.getItem("text12"));
$("#text13").text(localStorage.getItem("text13"));
$("#text14").text(localStorage.getItem("text14"));
$("#text15").text(localStorage.getItem("text15"));
$("#text16").text(localStorage.getItem("text16"));
$("#text17").text(localStorage.getItem("text17"));

// clear btn removes all text from local storage
$("#clearBtn").on("click", function () {
    localStorage.clear();
    $(".description").text("");
});


// displays today's date in the following format: Saturday, July 4th 2011, 6:30 (top of page)
let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm a"));

// declaring for time blocks, day status, and current moment hour
const hourBlock = document.getElementsByClassName("hourBlock")
const hourStatus = document.getElementsByClassName("input-group-text")
let momentHour = parseInt(moment().format('H'));

// changes bg color of time block
Array.from(hourBlock).forEach(hour => {
    let hourString = hour.id, rowTime;
    if (hourString) {
        rowTime = parseInt(hourString);
    }

    //call internal setBgColor fcn
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

//changes bg color for block of hour
function setBgColor(hour, color) {
    hour.style.backgroundColor = color;
}

// changes time status to past, present, or future
Array.from(hourStatus).forEach(status => {
    let statusString = status.id, rowTime;
    if (statusString) {
        rowTime = parseInt(statusString);
    }

    //call internal changeText fcn
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

//changes hour status' text
function changeText(status, text) {
    status.textContent = text
}