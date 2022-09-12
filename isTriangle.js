const threeAngles = document.querySelectorAll('.angles');
const inputButton = document.querySelector("#submit-button");
const displayOutput = document.querySelector("#output");



function calculateSumOfAngles(angle1, angle2, angle3){

    let sumOfAngles = angle1 + angle2 + angle3;

    return sumOfAngles;

}


function inputButtonHandler(){

    let sumOfAngles = calculateSumOfAngles(Number(threeAngles[0].value), Number(threeAngles[1].value), Number(threeAngles[2].value));

    if(threeAngles[0].value == "" || threeAngles[1].value == "" || threeAngles[2].value == "" ){

        displayOutput.innerText = "You have to provide all three angles" 

    } else if (sumOfAngles === 180){
        displayOutput.innerText = "Yes it is a triangle"

    } else {
        displayOutput.innerText = "No it not a triangle"
    }

    
}




inputButton.addEventListener("click", inputButtonHandler)