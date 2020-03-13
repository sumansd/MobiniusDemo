// using filter method......................................................
// function filterPrimes(num) {
//  numArray = num.filter(number => {
//         if(number>1){
//           for (var i = 2; i <= Math.sqrt(number); i++) {
//              if (number % i === 0)
//                   return false;
//             }
//           return true;
//         }// loop close
//     });
//      return numArray
//     }
// console.log(filterPrimes([10,20,5,7,3,1,3]))



// using forEach loop-------------------------------------------------------------------...........
function filterPrimes(num) {
    let numArray =[]
     num.forEach(number => {
         if(number>1){
             for (var i = 2;i <= Math.sqrt(number); i++) {
                if (number % i === 0)
                     return false; }
                 numArray.push(number)
               return true;
             }// loop close
   });
     return numArray
       }
   console.log(filterPrimes([10,20,5,7,3,1,3]))