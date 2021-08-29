const inputs = document.querySelectorAll(".area-input");

const checkBtn = document.querySelector("#check-area-btn");
 
const output = document.querySelector("#output-h2");

function baseAndHeight(base,height){
    const multipliedOutput = base * height;
    return multipliedOutput;
}

function calculateArea(){
 const baseHeight = baseAndHeight(inputs[0].value, inputs[1].value);

     const area = baseHeight / 2;

     console.log({area});
     output.innerText = `The area of the triangle is ${area} cm²`;

}



checkBtn.addEventListener('click',calculateArea);