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
