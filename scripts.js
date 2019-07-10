//COUNTDOWN SCRIPT

//get the element with date of finish action and its value. We put this value into data- attribute by PHP from customizer settings
var ElemWithDate = document.getElementById('actionDate'),
    date = ElemWithDate.dataset.date;

// Set the date we're counting down to
var countDownDate = new Date(date).getTime();

function countdown(){

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Get html elements for each time division
    var daysElem = document.getElementById('days'),
        hoursElem = document.getElementById('hours'),
        minsElem = document.getElementById('minutes'),
        secondsElem = document.getElementById('seconds');


    // Output the result in an element with id="demo"
    daysElem.innerHTML = days;
    hoursElem.innerHTML = hours;
    minsElem.innerHTML = minutes;
    secondsElem.innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<h3 style="text-align:center;width:100%">Акция завершена!</h3>";
    }
    
}

// Update the count down every 1 second
var x = setInterval(countdown, 1000);
