

let textbox = document.getElementById("textbox");
let  celsius = document.getElementById("celsius");
let  fahrenheit = document.getElementById("fahrenheit");
let result = document.getElementById("result");
let temp;

function convert(){
    if(celsius.checked){
        temp = Number(textbox.value).toFixed(1);
        let f = (temp * 9/5) + 32;
        result.textContent = f;
    }
    else if(fahrenheit.checked){
        temp = Number(textbox.value).toFixed(1);
        let c = (temp - 32) * 5/9;
        result.textContent = c;
    }
    else{
        result.textContent = "Select Temp!"
    }



}