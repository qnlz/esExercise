const cars ={ BWM:3, Tesla:2, Toyota:1}

// ES2015
// Instead of..
const vals=Object.keys(cars).map(key => cars[key]);
console.log(vals); //[3,2,1]

// ES2017 and onwards
// Use ...
const values =Object.values(cars);
console.log(values); //[3,2,1]