let x = 11;
let y = 7;
let z = x + y;
let age = ""

function checkAge(a) {
    if (a >= 18)
        return "Adult"
    else
        return "Minor"
}

console.log(checkAge(z))

// if (z >= 18) {
//     console.log("18 or over");
//     age = "Adult"
// }
// else {
//     console.log("Less than 18");
//     age = "Minor"
// }
    
// console.log(age);
// console.log("Value of z: ", z);