console.time('duration_time');
// 3.44
// 에라토스체네스의 체
let number = 100;
let data=[];

for(let i=0;i<=number;i++){
    data[i]=i;
}
console.log(data);

function prime(num){
    for(let i=2; i<=num; i++){
        if(data[i]===0)
            continue;
        for(let j=2;j<i;j++){
            if(i%j===0){
                data[i]=0;
                for(let q=2;q*i<=num;q++){
                    data[q*i]=0;
                }
            }

        }

    }
}
prime(number);
console.log(data);
console.timeEnd('duration_time');
