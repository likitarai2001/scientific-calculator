const screen = document.getElementById("screen");
// const buttons = document.getElementsByClassName("btn");
const buttons = document.querySelectorAll("button");
let num = screen.value;
let ans = false;
let trignometry_clicked = false;
let func_clicked = false;
let yroot_clicked = false;
let logbase_clicked = false;
let memory = 0;

console.log(buttons);
buttons.forEach((item) => {
    item.onclick = (e) => {
        if(ans){
            screen.value = "";
            ans = false;
        }

        val = e.target.value;
        if(screen.value === "0"){
            screen.value = val;
        }else{
            screen.value += val;
        }
        
        num = screen.value;

        if(item.id == "clear"){
            screen.value = "";
            document.getElementById("trig_dropdown").selected = true;
            document.getElementById("func_dropdown").selected = true;
        }else if(item.id === "backspace"){
            let string = screen.value.toString();
            screen.value = string.substr(0, string.length - 1);
        }else if(item.id === "fixedToExp"){
            fixedToExp();
        }else if(item.id === "pi"){
            pi();
        }else if(item.id === "toggleOperations"){
            toggleOperations();
        }else if(item.id === "sin" || item.id === "cos" || item.id === "tan"){
            trignometry_clicked = true;
            adv_eval();
        }else if(item.id === "e"){
            eValue();
        }else if(item.id === "oneByX"){
            oneByX();
        }else if(item.id === "modulus"){
            modulus();
        }else if(item.id === "exp"){
            exp();
        }else if(item.id === "mod"){
            mod();
        }else if(item.id === "fact"){
            fact();
        }else if(item.id === "xsq"){
            xsq();
        }else if(item.id === "sqroot"){
            sqroot();
        }else if(item.id === "tenPowX"){
            tenPowX();
        }else if(item.id === "log"){
            log();
        }else if(item.id === "ln"){
            ln();
        }else if(item.id === "ePowX"){
            exp();
        }else if(item.id === "xcube"){
            xcube();
        }else if(item.id === "cuberoot"){
            cuberoot();
        }else if(item.id === "twoPowX"){
            twoPowX();
        }else if(item.id === "toggleSign"){
            toggleSign();
        }else if(item.id === "equal"){
            total();
        }else if(item.id === "mc"){
            mc();
        }else if(item.id === "mr"){
            mr();
        }else if(item.id === "mplus"){
            mplus();
        }else if(item.id === "mminus"){
            mminus();
        }else if(item.id === "ms"){
            ms();
        }
    }
});
console.log(screen);

// function trignometry(){
//     let x = document.getElementById("trignometry").value;
//     if(x == "sin("){
//         let y = Math.sin(disp.value * Math.PI / 180);
//         disp.value = y.toFixed(2);
//     }
//     else if(x == "cos("){
//         let y = Math.cos(disp.value * Math.PI / 180);
//         disp.value = y.toFixed(2);
//     }
//     else if(x == "tan("){
//         let y = Math.tan(disp.value * Math.PI / 180);
//         disp.value = y.toFixed(2);
//     }
// }

function fixedToExp(){
    screen.value = Number(screen.value).toExponential();
};

function toggleOperations(){
    console.log("called me");
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
    console.log(screen.value);
    // let x = document.getElementById("trignometry").value;
    // if(x == "sin"){
    //     let y = Math.sin(screen.value * Math.PI / 180);
    //     screen.value = y;
    // }
    // else if(x == "cos"){
    //     let y = Math.cos(screen.value * Math.PI / 180);
    //     screen.value = y;
    // }
    // else if(x == "tan"){
    //     let y = Math.tan(screen.value * Math.PI / 180);
    //     screen.value = y;
    // }
    trignometry_clicked = true;
}
function func(){
    func_clicked = true;
}

function pi(){
    const pi = 3.14159265359;
    console.log(">>>",screen.value);
    if(screen.value == ""){
        screen.value = pi;
    }else{
        screen.value *= pi;
    }
}

function eValue(){
    const e = 2.71828182846;
    if(screen.value == ""){
        screen.value = e;
    }else{
        screen.value *= e;
    }
}

function oneByX(){
    let num = screen.value;
    screen.value = 1 / num;
}

function modulus(){
    screen.value = Math.abs(screen.value);
}

function exp(){
    screen.value = Math.exp(screen.value);
}

function mod(){
  screen.value = eval(screen.value);
}

function fact(){
    let fact = 1;
    for(let num=1; num<=screen.value; num++){
        fact *= num;
    }
    screen.value = fact;
}

function xsq(){
    let num = screen.value;
    screen.value = num * num;
}

function sqroot(){
    let num = screen.value;
    screen.value = Math.sqrt(num);
}

function tenPowX(){
    let num = screen.value;
    screen.value = Math.pow(10, num);
}

function log(){
    let num = screen.value;
    screen.value = Math.log10(num);
}

function ln(){
    // let num = screen.value;
    screen.value = Math.log(num);
}

function xcube(){
    // let num = screen.value;
    screen.value = Math.pow(num, 3);
}

function cuberoot(){
    screen.value = Math.cbrt(num);
}

function twoPowX(){
    screen.value = Math.pow(2, num);
}

function toggleSign(){
    let num = screen.value;
    screen.value = num * (-1);
}

function total(){
    // if (eval(screen.value) == SyntaxError || eval(screen.value) == ReferenceError || eval(screen.value) == TypeError) {
    //     screen.value == "Syntax Error";
    //   }
    try{
    console.log(screen.value)
    screen.value = eval(screen.value);
    ans = true;}catch(err){
        // console.log("ERR",err);
        // screen.value = "Syntax Error";
        adv_eval();
    }
}

function adv_eval(){
    // console.log("Advance eval");
    let expression = screen.value;
    // const func = text.split("(");
    // if(trignometry_clicked){
    //     trignometry();
    // }
    console.log("is trignometry",trignometry_clicked);
    if(trignometry_clicked || func_clicked){
        const func = expression.split("(");
        const number = func[1].split(")");
        if(func[0] === "sin"){
            screen.value = Math.sin(number[0] * Math.PI / 180).toFixed(9);
        }else if(func[0] === "cos"){
            screen.value = Math.cos(number[0] * Math.PI / 180).toFixed(9);
        }else if(func[0] === "tan"){
            screen.value = Math.tan(number[0] * Math.PI / 180).toFixed(9);
        }else if(func[0] === "cosec"){
            let sine = Math.sin(number[0] * Math.PI / 180).toFixed(9);
            screen.value = 1 / sine;
        }else if(func[0] === "sec"){
            let cosine = Math.cos(number[0] * Math.PI / 180).toFixed(9);
            screen.value = 1 / cosine;
        }else if(func[0] === "cot"){
            let tangent = Math.tan(number[0] * Math.PI / 180).toFixed(9);
            screen.value = 1/ tangent;
        }else if(func[0] === "abs"){
            screen.value = Math.abs(eval(number[0]));
        }else if(func[0] === "floor"){
            screen.value = Math.floor(eval(number[0]));
        }else if(func[0] === "ceil"){
            screen.value = Math.ceil(eval(number[0]));
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
            screen.value = a / b;
        }else{
            screen.value = Math.round(Math.pow(x, 1/y));
        }
    }
}

// Memory Functions
// Clear Memory 
function mc(){
    memory = "";
    screen.value = "";
    console.log(memory);
}
// Read Memory
function mr(){
    screen.value = memory;
    console.log(memory);
}
// Memory Plus 
function mplus(){
    memory = memory + eval(screen.value);
    screen.value = memory;
    console.log(memory);
}
// Memory Minus 
function mminus(){
    memory = memory - eval(screen.value);
    screen.value = memory;
    console.log(memory);
}
// Save Memory
function ms(){
    memory = eval(screen.value);
    console.log(memory);
}
// let screen;
// let buttons;

// window.addEventListener('DOMContentLoaded', (event) => {
//     buttons = document.querySelectorAll("button");
//     screen = document.getElementById("screen");

//     buttons.forEach((item) => {
//     item.onclick = () => {
//         if(item.id == "clear"){
//             screen.value = "";
//             document.getElementById("trig_dropdown").selected = true;
//             document.getElementById("func_dropdown").selected = true;
//         }else if(item.id === "backspace"){
//             let string = screen.value.toString();
//             screen.value = string.substr(0, string.length - 1);
//         }
//     }
// });

// console.log(buttons);
// console.log(screen);
// });