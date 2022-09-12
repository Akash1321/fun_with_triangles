const givenSides = document.querySelectorAll('.sides');
const calculateButton = document.querySelector("#button");
const displayOutput = document.querySelector("#output");

function calculateSumOfSquare(sideA, sideB) {

    let sumOfSquare = sideA ** 2 + sideB ** 2

    return sumOfSquare

}


function handleCalculateButton() {
    let sumOfSquare = calculateSumOfSquare(Number(givenSides[0].value), Number(givenSides[1].value))

    let hypotenuse = Math.sqrt(sumOfSquare);

    if (givenSides[0].value == false || givenSides[1].value == false) {

        displayOutput.innerText = "You should provide both the sides"

    } else if (givenSides[0].value > 0 && givenSides[1].value > 0) {

        displayOutput.innerText = "Hypotenuse is " + hypotenuse.toFixed(2)

    } else {

        displayOutput.innerText = "You input should be greater than zero"

    }

}




calculateButton.addEventListener("click", handleCalculateButton);