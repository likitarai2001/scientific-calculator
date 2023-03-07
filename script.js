const screen = document.getElementById("screen");
// const buttons = document.getElementsByClassName("btn");
const buttons = document.querySelectorAll("button");


console.log(buttons);
buttons.forEach((item) => {
    item.onclick = (e) => {
        val = e.target.value;
        screen.value += val;

        if(item.id == "clear"){
            screen.value = "";
            document.getElementById("trig_dropdown").selected = true;
            document.getElementById("func_dropdown").selected = true;
        }else if(item.id === "backspace"){
            let string = screen.value.toString();
            screen.value = string.substr(0, string.length - 1);
        }else if(item.id === "pi"){
            pi();
        }else if(item.id === "toggleOperations"){
            toggleOperations();
        }else if(item.id === "e"){
            evalue();
        }else if(item.id === "oneByX"){
            oneByX();
        }else if(item.id === "abs"){
            abs();
        }else if(item.id === "exp"){
            exp();
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
        }
    }
});
console.log(screen);


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
    console.log(">>>trigno");
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

function evalue(){
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

function abs(){
    screen.value = Math.abs(screen.value);
}

function exp(){
    screen.value = Math.exp(screen.value);
}

function mod(){
  return;
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
    let num = screen.value;
    screen.value = Math.log(num);
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