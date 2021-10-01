let salaries = {
    VladP: 194,
    VladV: 194,
    Misha: 2,
}

let array = Object.values(salaries);
let sum = 0;
for(var i=0;i <= array.length - 1;i++){
    sum = sum + (array[i]);
}

if (Object.keys(salaries).length === 0) {
    sum = 0;
    alert(sum);
} else {
    alert(sum);
}