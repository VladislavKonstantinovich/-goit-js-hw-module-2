// let salaries = {
//     VladP: 194,
//     VladV: 194,
//     Misha: 2,
// }

// const sumi = function() {
  
//     for (const argument of arguments) {
//         console.log(argument);
//     }
// };

// let sum = sumi(Object.values(salaries));

// if (Object.keys(salaries).length === 0) {
//     sum = 0;
//     alert(sum);
// } else {
//     alert(sum);
// }



let salaries = {
    VladP: 194,
    VladV: 194,
    Misha: 2,
}

let sum = salaries.VladP + salaries.VladV + salaries.Misha;

if (Object.keys(salaries).length === 0) {
    sum = 0;
    alert(sum);
} else {
    alert(sum);
}