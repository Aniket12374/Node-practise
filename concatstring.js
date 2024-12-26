const str1 = "Hello ";
const str2 = "Akash";

const constr = str1.concat('',str2)
console.log(constr);

// 2nd method 
const result = str1 + str2;
console.log(result);

// 3rd method
const response = [str1,str2].join('');
console.log(response);