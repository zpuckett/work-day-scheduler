$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function () {

        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    //Need my clear events button to work!!

    $(".clearBtn").on("click", function () {
        localStorage.clear();
        initState();
    })



    //load saved data from local storage
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));

    // create function to reset to initial state of text area
    function initState() {
        $(".description").each(function () {
            $(this).val("");
        })

    }

    // create function to track hour block with real time moment
    function hourTracker() {
        var currentHour = moment().hour();

        // function and if/else if for putting todos in past present or future    
        $(".time-block").each(function () {
            var spotHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(spotHour, currentHour)

            if (spotHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } else if (spotHour === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            } else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        })
    }
    hourTracker();

})