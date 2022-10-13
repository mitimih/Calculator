let a = "";
let b = "";
let sign = "";
let finish = false;

const dig = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ["-","+","*","/"];


const out = document.querySelector('.calc-screen p')

function clear (){
a = '';
b = '';
sign = '';
finish = false;
out.textContent = 0;

}

document.querySelector('.AC').onclick = clear; 

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;

    if(event.target.classList.contains('AC')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (dig.includes(key)) {
        if (b === '' && sign === ''){
            a += key;
            out.textContent = a;
        }
        else if (a!=='' && b!== '' && finish){}
        else {
            b+= key;
            out.textContent = b;
        }
        console.table (a,b, sign);
        return; 
    }

    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(sign);
        return;
    }

    if (key === '=') {
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                    a = a - b;
                    break;
            case "*":
                a = a * b;
                break;
            case "/":
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.table (a, b, sign);
    }

}