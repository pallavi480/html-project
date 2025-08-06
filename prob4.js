function abc (a){

// console.log(a)

return a 

}

let x = abc("hello")

console.log(x)

// superman : he is planning to add two number and give the answer to batman 

// batman:  batman is planning to take superman' answer and square it, then give it to shaktiman

// shktiman: he will just substract 50 from it and give the answer to villain 


function superman (a,b){

let add = (a+b);

return add

}

function batman (x){

    return x**2;

}

function shktiman (y){

    let a = y-50;
    return a
}

let sup = superman(10,20)
// console.log(sup)

let bat = batman (sup)
console.log(bat)

let villian = shktiman(bat)
console.log(villian)