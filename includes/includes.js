const arr = [1,2,3,NaN];

// Instead of
if(arr.indexOf(3)>=0){
    console.log(true);
}

// Use
if(arr.includes(3)){
    console.log(true);
}

// PS:note
arr.includes(NaN);
arr.indexOf(3);