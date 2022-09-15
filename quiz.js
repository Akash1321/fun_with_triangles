
const formInput = document.querySelector("#quiz-form");
const submitButton = document.querySelector("#button");
const displayOutput = document.querySelector("#output");

let rightAnswers = ["obtuse", "acute", "isoceles", "right-angled", "equilateral", "perimeter", "hypotenuse", "true", "5", "180"  ]


function submitButtonHandler(){
    let score = 0;
    let index = 0;

    const formAnswers = new FormData(formInput);

    for( let userAnswers of formAnswers.values() ){

        console.log(userAnswers);

        if (userAnswers === rightAnswers[index]){
            score = score + 1

        }

        index = index + 1
    }

    if (score < 5 ){
        displayOutput.style.color = "red"
    } else {
        displayOutput.style.color = "green"
    }

    displayOutput.innerText = `Your score is ${score} out of 10`
    
}


submitButton.addEventListener("click", submitButtonHandler);

