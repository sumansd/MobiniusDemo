let size= Number(prompt("input how many input value you want "))
let storeArray = [];                              
for (let i = 0; i < size; i++) {              
  storeArray.push(prompt('Enter number ' + (i+1)));   // push the value into the array
 }
storeArray = storeArray.map(Number);    // getting the value in new array
document.write(storeArray.join(','))            // display your array in screen
function addOfDigitOnArray( passArray){
    if(passArray.length>0){
      let sumofNumber = passArray.reduce(function(a, b){
       return a + b; }, 0);
     document.write(`the sum is ${sumofNumber} <br> `)
          if(sumofNumber<9){
            document.write(sumofNumber)
            }
          else{
            function ProdctDigit(PassValue) {
            let product=1 ,ConvertString= PassValue.toString()

           for(let index =0;index<ConvertString.length;index++){
              let number= parseInt(ConvertString[index])
              product = product*number
            }                                        // closing loop
              if (product >9){
                 product= ProdctDigit(product)   }        // using recursion.........
                    return product
                }                                             // closing inner function
             document.write(`the product is ${ProdctDigit(sumofNumber)}`)
            }                                                 // closing else
         }
      else{
        document.write('the number is'+0)}
    }                                                     // closing outer function
addOfDigitOnArray(storeArray)

  