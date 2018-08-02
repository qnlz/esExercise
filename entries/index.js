const cars={ BMW:3 , Tesla:2 , Toyota:1 };


//ES 5.1
//Instead of extracting keys and then agin looping
Object.keys(cars).forEach(function(key){
    console.log("key:" + key + "value:" + cars[key]);
});

// ECMAScript 2017(ES8)
// Use Object.entries
for(let [key, value] of Object.entries(cars)){
    console.log('key: ${key} value: ${value}');
}


// ES2015
// Instead of..
// Get objcet keys and then each item to Map in a loop
const map1=new Map();
Object.keys(cars).forEach(key => {
    map1.set(key,cars[key]);
});
console.log(map1);


// ES2017 and onwards
// Use...
const map=new Map(Object.entries(cars));
console.log(map);