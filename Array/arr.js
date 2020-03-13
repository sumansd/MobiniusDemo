
function sevenBoom(arr) {
  let pushResult=[]
    arr.forEach((value) => {
    let result=(value.toString().includes(7))
   pushResult.push(result)
   })  
let Final_res= pushResult.includes(true)
let res = Final_res ? "Boom!" : "there is no 7 in the array";
return (res)
}
console.log((sevenBoom([22,12,27])))




