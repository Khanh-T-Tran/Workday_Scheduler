// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


// Display current date
// $("#currentDay").html(moment().format('dddd, MMM do YYYY'));
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(todayDate);

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".plan").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time,text);

    })
    function timeTracker() {
        
        var timeNow = moment().hour(); //get current number of hours.

        // loop over time blocks To check the time and add the classes for background indicators
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockTime)

             
            if (blockTime < timeNow) {
                $(this).removeClass("future present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present past");
                $(this).addClass("future");

            }
        })
    }
    

    timeTracker();
})