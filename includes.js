const arr = [1,2,3,NaN];

if(arr.indexOf(3)>=0){
    console.log(true);
}

if(arr.includes(3)){
    console.log(true);
}

arr.includes(NaN);
arr.indexOf(3);