const sides = document.querySelectorAll(".side-input");

const hypotenuseButton = document.querySelector("#hypotenuse-btn");

const outputDiv = document.querySelector("#output-div");


function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b
    // console.log(sumOfSquares);
    return sumOfSquares 
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides
        [0].value),Number(sides[1].value));

    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
 
    outputDiv.innerText = " The length Hypotenuse is "  + lengthOfHypotenuse;
}

hypotenuseButton.addEventListener('click',calculateHypotenuse)