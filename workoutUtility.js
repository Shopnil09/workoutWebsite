function calculateBMI() { 
    var weight = parseFloat(document.getElementById("height").value); //converting string into float 
    var height = parseFloat(document.getElementById("weight").value); //converting string into float 
    var BMI = height/(weight * weight); //calculating BMI
    BMI = BMI.toFixed(1); //to show one value after decimals instead of showing all the decimal values

    var strBMI = "Your BMI is " + BMI; 
    var message1 = " <br> We have the perfect workout and meal plan for you to gain healthy weight."; 
    var message2 = " <br> You are perfect for your weight and height. This workout and meal plan will help you stay in shape!" 
    var message3 = " <br> This workout and meal plan is not for you. Contact us for more guidance!"

    if(BMI <= 19) { //if BMI is underweight, display message1
        document.getElementById("BMIcalculated").innerHTML = strBMI + message1; 
    } else if(BMI > 19 && BMI < 25){ // if BMI is in between 20 and 24, then display message2
        document.getElementById("BMIcalculated").innerHTML = strBMI + message2; 
    } else { // else display message 3
        document.getElementById("BMIcalculated").innerHTML = strBMI + message3; 
    }
}

function showHomeWorkouts() { 
    var workouts = [
        "Jumping Jacks", "Plank", "Cross Crunches", "Side Plank", 
        "Squats", "Push-ups", "Walking Lunges", "Russian Twists", 
        "High Knees", "Dips"
    ]; //list of workouts in the form of an array

    var exercises = ""; //variable to append string together
    var numOfWorkouts = parseFloat(document.getElementById("numberOfWorkouts").value); //converting string into float 
    var errorMessage = "Please enter a number between 1-10"; //error message if value > 10 is inputted 

    if(numOfWorkouts > workouts.length || numOfWorkouts < 0) { //if value is greate than 10 or value is less than 0, display the error message 
        document.getElementById("listOfWorkouts").innerHTML = errorMessage; 
    } else { //else loop through the array and display the amount of workouts specified
        for(let i = 0; i < numOfWorkouts; i++) { 
            exercises = exercises + workouts[i] + "<br> <br>"; //<br> to shift the text to the next line 
        }
        document.getElementById("listOfWorkouts").innerHTML = exercises; //display the exercises variable with all the string appended
    }
}