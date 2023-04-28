let Minandmaxvalues = (...arguments) => {
    let map = new Map();
    let max = Math.max(...arguments)
    let min = Math.min(...arguments)
    let obj = {
        'max' : max ,
        'min' : min
    }
    return obj;
    
}

let result = Minandmaxvalues(5,2,7,1,9);
console.log(result);