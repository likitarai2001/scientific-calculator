const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
let num = screen.value;
let trignometry_clicked = false;
let func_clicked = false;
let yroot_clicked = false;
let logbase_clicked = false;
let memory = 0;

buttons.forEach((item)=>{
    item.addEventListener('click', (e) => {
        val = e.target.value;
        if(screen.value === "0"){
            screen.value = val;
        }else{
            screen.value += val;
        }
        num = screen.value;
    });
});

function fixedToExp(){
    screen.value = Number(screen.value).toExponential();
};

function toggleOperations(){
    const col1 = document.getElementsByClassName("option1");
    const col2 = document.getElementsByClassName("option2");

    if(col2[0].style.display === "inline-block"){
        for(let i=0;i<6;i++){
            col1[i].style.display = "inline-block";
        }
        for(let i=0;i<6;i++){
            col2[i].style.display = "none";
        }
    }else{
        for(let i=0;i<6;i++){
            col2[i].style.display = "inline-block";
        }
        for(let i=0;i<6;i++){
            col1[i].style.display = "none";
        }
    }
};

function trignometry(){
    trignometry_clicked = true;
}

function func(){
    func_clicked = true;
}

function pi(){
    const pi = 3.14159265359;
    if(screen.value === ""){
        screen.value = pi;
    }else{
        screen.value *= pi;
    }
}

function eValue(){
    const e = 2.71828182846;
    if(screen.value === ""){
        screen.value = e;
    }else{
        screen.value *= e;
    }
}

function clr(){
    screen.value = "";
    document.getElementById("trig_dropdown").selected = true;
    document.getElementById("func_dropdown").selected = true;
}

function backspace(){
    let string = screen.value.toString();
    screen.value = string.substr(0, string.length - 1);
}

function xsq(){
    screen.value = num * num;
}

function xcube(){
    screen.value = Math.pow(num, 3);
}

function oneByX(){
    screen.value = 1 / num;
}

function modulus(){
    screen.value = Math.abs(screen.value);
}

function exp(){
    screen.value = Math.exp(screen.value);
}

function sqroot(){
    screen.value = Math.sqrt(num);
}

function cuberoot(){
    screen.value = Math.cbrt(num);
}

function fact(){
    let fact = 1;
    for(let i=1; i<=screen.value; i++){
        fact *= i;
    }
    screen.value = fact;
}

function tenPowX(){
    screen.value = Math.pow(10, num);
}

function twoPowX(){
    screen.value = Math.pow(2, num);
}

function log(){
    screen.value = Math.log10(num);
}

function ln(){
    screen.value = Math.log(num);
}

function toggleSign(){
    screen.value = num * (-1);
}

function equal(){
    console.log("evaluate");
    try{
        screen.value = eval(screen.value);
    }catch(err){
        adv_eval();
    }
}

function adv_eval(){
    let expression = screen.value;
    if(trignometry_clicked || func_clicked){
        const func = expression.split("(");
        const number = func[1].split(")");
        const numRad = number[0] * Math.PI / 180;
        switch(func[0]){
            case 'sin':
                screen.value = Math.sin(numRad).toFixed(2);
                break;
            case 'cos':
                screen.value = Math.cos(numRad).toFixed(2);
                break;
            case 'tan':
                screen.value = Math.tan(numRad).toFixed(2);
                break;
            case 'cosec':
                let sine = Math.sin(numRad).toFixed(2);
                screen.value = 1 / sine;
                break;
            case 'sec':
                let cosine = Math.cos(numRad).toFixed(2);
                screen.value = 1 / cosine;
                break;
            case 'cot':
                let tangent = Math.tan(numRad).toFixed(2);
                screen.value = 1 / tangent;
                break;
            case 'abs':
                screen.value = Math.abs(eval(number[0]));
                break;
            case 'floor':
                screen.value = Math.floor(eval(number[0]));
                break;
            case 'ceil':
                screen.value = Math.ceil(eval(number[0]));
                break;
            default:
                return "Invalid";
        }
        trignometry_clicked = false;
        func_clicked = false;
    }else{
        const func = expression.split(" ");
        let x = func[0];
        let y = func[3];
        if(func[1] === "log"){
            var a = Math.log(x);
            var b = Math.log(y);
            if(a === 0 && b === 0){
                screen.value = 0;
            }else{
                screen.value = a / b;
            }
        }else{
            screen.value = Math.round(Math.pow(x, 1/y));
        }
    }
}

function mc(){
    memory = "";
    screen.value = "";
    console.log(memory);
}

function mr(){
    screen.value = memory;
    console.log(memory);
}

function m_plus(){
    memory = memory + eval(screen.value);
    screen.value = memory;
    console.log(memory);
}

function m_minus(){
    memory = memory - eval(screen.value);
    screen.value = memory;
    console.log(memory);
}

function ms(){
    memory = eval(screen.value);
    console.log(memory);
}
