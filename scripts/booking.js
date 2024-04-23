/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, 
// and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
let numbersOfDays = 0;
let clicked = false;
let totalCost = 0;

const dayButtons = [
    document.getElementById("monday"),
    document.getElementById("tuesday"),
    document.getElementById("wednesday"),
    document.getElementById("thursday"),
    document.getElementById("friday")
]

dayButtons.forEach(function(button) {
    button.addEventListener("click", function() { clickedDay(button) });
});

document.getElementById("full").addEventListener("click", function() { changeRate("full") });
document.getElementById("half").addEventListener("click", function() { changeRate("half") });

document.getElementById("clear-button").addEventListener("click", clearEverything);

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that 
// element, and update any other relevant variables. Then, we can recalculate the 
// total cost.
// added challenge: don't update the dayCounter if the same day is clicked more 
// than once. hint: .classList.contains() might be helpful here!

function clickedDay(button) {

    if (button.classList.contains("clicked")) {
        button.classList.remove("clicked");
        numbersOfDays--;
    }
    else {
        button.classList.add("clicked");
        numbersOfDays++;
        
    }

    calculateCost();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, 
// any other relevant variables are reset, and the calculated cost is set to 0.

function clearEverything() {
    numbersOfDays = 0;

    dayButtons.forEach(function(button) {
        button.classList.remove("clicked");
    });
    

    calculateCost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" 
// class to the "half" element, remove it from the "full" element, and recalculate the 
// total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the 
// clicked class is added to "full" and removed from "half", and the total cost is 
// recalculated.

function changeRate(day) {
    if (day == "half") {
        costPerDay = 20;
        document.getElementById("half").classList.add("clicked");
        document.getElementById("full").classList.remove("clicked");
    } else {
        costPerDay = 35;
        document.getElementById("full").classList.add("clicked");
        document.getElementById("half").classList.remove("clicked");
    }

    calculateCost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element 
// to the appropriate value

function calculateCost() {
    totalCost = costPerDay * numbersOfDays;
    document.getElementById("calculated-cost").innerHTML = totalCost;
}