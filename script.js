let bClear = document.getElementById("bClear")
let bBackspace = document.getElementById("bBackspace")
let bDiv = document.getElementById("bDiv")
let bMulti = document.getElementById("bMulti")
let b7 = document.getElementById("b7")
let b8 = document.getElementById("b8")
let b9 = document.getElementById("b9")
let bAdd = document.getElementById("bAdd")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let b6 = document.getElementById("b6")
let bMinus = document.getElementById("bMinus")
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let bEnter = document.getElementById("bEnter")
let bEnter2 = document.getElementById("bEnter2")
let PH = document.getElementById("PH")
let b0 = document.getElementById("b0")
let bPeriod = document.getElementById("bPeriod")

bClear.addEventListener("click",()=> clear());
bBackspace.addEventListener("click",()=> backSpaces());
bDiv.addEventListener("click",()=>  sign("/"));
bMulti.addEventListener("click",()=> sign("*"));;
b7.addEventListener("click",()=> start("7"));
b8.addEventListener("click",()=> start("8"));
b9.addEventListener("click",()=> start("9"));
bAdd.addEventListener("click",()=> sign("+"));
b4.addEventListener("click",()=> start("4"));
b5.addEventListener("click",()=> start("5"));
b6.addEventListener("click",()=> start("6"));
bMinus.addEventListener("click",()=> sign("-"));;
b1.addEventListener("click",()=> start("1"));
b2.addEventListener("click",()=> start("2"));
b3.addEventListener("click",()=> start("3"));
bEnter.addEventListener("click",()=> calculate());
bEnter2.addEventListener("click",()=> calculate());
PH.addEventListener("click",()=> start("Eh perro, no me piques, te woa dar un error por prro"));
b0.addEventListener("click",()=> start("0"));
bPeriod.addEventListener("click",()=> period("."));

let firstNumber = "";
let secondNumber = "";
let signUsed = "";
let result = 0;
let periodCont = 0;



let start = function(a){
    if (firstNumber.length>=19) return
    firstNumber+=a
    screenDown.textContent= `${firstNumber}`
}

let sign = function(s){
    secondNumber = firstNumber
    firstNumber = ""
    signUsed = s
    periodCont=0
    screenUpper.textContent= `${secondNumber} ${signUsed}`
}

let calculate = function(){
    if (firstNumber==0) return
    const firstPart = parseFloat(secondNumber);
    const secondPart = parseFloat(firstNumber); 
    switch (signUsed){
        case "+":
            sum(firstPart,secondPart)
            break;
        case "-":
            sub(firstPart,secondPart)
            break;
        case "*":
            multi(firstPart,secondPart)
            break;
        case "/":
            div(firstPart,secondPart)
            break;
    }
}

let sum = function(firstPart,secondPart){
    result = firstPart + secondPart
    screenUpper.textContent= `${firstPart} + ${secondPart} =`
    screenDown.textContent= `${result}`
    secondNumber = result
}

let sub = function(firstPart,secondPart){
    result = firstPart - secondPart
    screenUpper.textContent= `${firstPart} - ${secondPart} =`
    screenDown.textContent= `${result}`
    secondNumber = result
}

let multi = function(firstPart,secondPart){
    result = firstPart * secondPart  
    screenUpper.textContent= `${firstPart} * ${secondPart} =`
    screenDown.textContent= `${result}`
    secondNumber = result
}

let div = function(firstPart,secondPart){
    result = firstPart / secondPart  
    screenUpper.textContent= `${firstPart} / ${secondPart} =`
    screenDown.textContent= `${result}`
    secondNumber = result
}

let clear = function(){
    firstNumber=""
    secondNumber=""
    signUsed=""
    screenUpper.textContent=""
    screenDown.textContent= "0"
}

let backSpaces = function(){
    firstNumber = firstNumber.slice(0,-1)
    screenDown.textContent= `${firstNumber}`
    console.log(firstNumber)
}

let period = function(b){
    if (periodCont==0){
        firstNumber+=b
        periodCont= periodCont + 1
        screenDown.textContent= `${firstNumber}`
    }
    else{
        return
    }
}

