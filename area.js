const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculateButton = document.querySelector("#button");
const displayOutput =document.querySelector("#output");


function findArea(){
    
    let area = (Number(base.value)* Number(height.value)) / 2;
    
    
    if (base.value == "" || height.value == ""){

        displayOutput.style.color = "red"

        displayOutput.innerText = "You should provide both the values"

    }else if(base.value > 0 && height.value > 0){

        displayOutput.style.color = "green"

        displayOutput.innerText = "The area of triangle is " + area + " (square units)"

       

    }else {
        displayOutput.style.color = "red"
        displayOutput.innerText = "Your input should be greater than zero"
    }

}

calculateButton.addEventListener("click", findArea);