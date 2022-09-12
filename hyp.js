const givenSides = document.querySelectorAll('.sides');
const calculateButton = document.querySelector("#button");
const displayOutput = document.querySelector("#output");

function calculateSumOfSquare(sideA, sideB){

    let sumOfSquare = sideA**2 + sideB**2

    return sumOfSquare

}


function handleCalculateButton(){
    let sumOfSquare = calculateSumOfSquare(Number(givenSides[0].value), Number(givenSides[1].value) )

    let hypotenuse = Math.sqrt(sumOfSquare);

    if(givenSides[0].value == false || givenSides[1].value == false){

        displayOutput.innerText = "You should provide both the sides"

    } else {
        displayOutput.innerText = "Hypotenuse is " + hypotenuse.toFixed(2)
    }
    
}




calculateButton.addEventListener("click", handleCalculateButton);