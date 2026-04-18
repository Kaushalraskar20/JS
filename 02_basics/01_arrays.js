//arrays  it is the collection of th emultiple items kep in the single objects . indexing starts from the zero 
// arrays are the shallow copy they will share the same refrence point 
//deep copy properties do not share the main reference  


const myArr = [0,1,2,3,4,5]
const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2[2]);


//array methods 
// myArr.push(6)

// myArr.unshift(10)  //used to add in the start of the array 

// console.log(myArr.includes(9)) //this will give me the answers in the boolean format , this is used to check whether that is included or not in the array 

// console.log(myArr.indexOf(13)) //this iwll give you the index and if the number is not present then it will print the -1 


// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr)


//Slice , splice 

console.log("A",myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);