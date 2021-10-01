let salaries = {
    VladP: 194,
    VladV: 194,
    Misha: 2,
}

let sum = Object.values(salaries);
let sumi = 0;
for(var i=0;i<sum.length;i++){
    sumi = sumi + parseInt(sum[i]);
}

if (Object.keys(salaries).length === 0) {
    sumi = 0;
    alert(sumi);
} else {
    alert(sumi);
}



// let salaries = {
//     VladP: 194,
//     VladV: 194,
//     Misha: 2,
// }

// let sum = salaries.VladP + salaries.VladV + salaries.Misha;

// if (Object.keys(salaries).length === 0) {
//     sum = 0;
//     alert(sum);
// } else {
//     alert(sum);
// }