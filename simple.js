let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log(sum);
let add = 0;
for( let i = 5; i >= 1; i--){
    sum = sum + i;
}
console.log(sum);

let jog = 0;

function jog(i){
    if(i == 1){
        return 1;
    }
    
    return i + jog(i - 1);
}

const result = jog(5);
console.log(result);