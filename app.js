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
            inputDisplay.value = inputDisplay.value.slice(0, -1);
            return;
        }
        if(inputDisplay.value === '0'){
            inputDisplay.value = clickedButton;
        }else{
            inputDisplay.value += clickedButton;  
        }
        console.log(inputDisplay.value);
    })
})

resetButton.addEventListener("click", () =>{
    inputDisplay.value = '';
    if(inputDisplay.value === ''){
        inputDisplay.value = '0';
    }
})


