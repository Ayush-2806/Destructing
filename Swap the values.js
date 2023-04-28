let swap = (...arguments) =>{
    
    arguments[0] = arguments[0] + arguments[1];
    arguments[1] = arguments[0] - arguments[1];
    arguments[0] = arguments[0] - arguments[1];
    return arguments
}

let x = 5;
let y = 10;


let result = swap(x,y)
console.log(result);