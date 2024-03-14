

let textbox = document.getElementById("textbox");
let  celsius = document.getElementById("celsius");
let  fahrenheit = document.getElementById("fahrenheit");
let result = document.getElementById("result");
let temp;

function convert(){
    if(celsius.checked){
        temp = Number(textbox.value).toFixed(1);
        let f = (temp * 9/5) + 32;
        if (f>103){
				result.textContent = f+" °F🥵️";
        }else if(f>82.4 && f<103){
        		result.textContent = f+" °F😃️";
        }else{
        		result.textContent = f+" °F🥶️";
        }
    }
    else if(fahrenheit.checked){
        temp = Number(textbox.value).toFixed(1);
        let c = (temp - 32) * 5/9;
        if (c>39){
				result.textContent = c+" °C🥵️";
        }else if(c>28 && c<39){
        		result.textContent = c+" °C😃️";
        }else{
        		result.textContent = c+" °C🥶️";
        }
    }
    else{
        result.textContent = "Select Temp!"
    }



}
