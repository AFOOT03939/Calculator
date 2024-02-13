let buttons = document.querySelectorAll('.btn');
let inputDisplay = document.getElementById('display');
let resetButton = document.getElementById('reset');

buttons.forEach(boton =>{
    boton.addEventListener("click", () =>{
        const clickedButton = boton.textContent;
        if (boton.id === "equal") {
            let result = eval(inputDisplay.value);
            inputDisplay.value = result;
            return;
        }
        if(boton.id === "delete"){
            if(inputDisplay.value.length === 1){
                inputDisplay.value = "0";
            }else{
                inputDisplay.value = inputDisplay.value.slice(0, -1);
            }
            return;
        }
        
        if (inputDisplay.value === '0' && clickedButton !== '0'  && clickedButton !== '*' && clickedButton !== '-' && clickedButton !== '/') {
            inputDisplay.value = clickedButton;
        } else {
            inputDisplay.value += clickedButton;  
        }
    })
})

resetButton.addEventListener("click", () =>{
    inputDisplay.value = '0';
    if(inputDisplay.value === ''){
        inputDisplay.value = '0';
    }
})
