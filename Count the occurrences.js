let input = "ayushagrawal"
let arr = [...input]

const count = new Map();

arr.map((element) => {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
})

console.log(count); 


