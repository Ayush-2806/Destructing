let randomaccess = (...arguments) =>{
    let arr = [arguments[0] , arguments[1] , arguments[arguments.length-1]];
    return arr;
}

let result = randomaccess(1,2,3,4,5);
console.log(result);
