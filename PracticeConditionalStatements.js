//Are You Old Enough? 
var age = 10
if (age >= 65) {
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical")
}

//Days of the week program as a switch statement
var day = "Sunday"
switch (day) {
        case "Monday":
        console.log("Start the week with energy!");
        break;
    case "Tuesday":
        console.log("Keep the momentum going.");
        break;
    case "Wednesday":
        console.log("Midweek hustle!");
        break;
    case "Thursday":
        console.log("Almost there.");
        break;
    case "Friday":
        console.log("Finish strong!");
        break;
    case "Saturday":
        console.log("Time to relax and recharge.");
        break;
    case "Sunday":
        console.log("Prepare for the week ahead.");
        break;
    default:
        console.log("There is no such day");
}