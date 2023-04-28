let nested = (person) =>{
 let obj = {
    name : person.name,
    street : person.address.street
 }
 return obj
}




const person = {
    name : "Ayush",
    age : 21,
    address : {
        street : "B8 , Block B,Industrail Area",
        City : "Noida",
        State : "Uttar Pradesh"

    }
}

let result = nested(person);
console.log(result);

