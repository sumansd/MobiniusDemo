
var input= prompt("input the number")
document.write(input+"<br>")

function addDigit(passValue){
    let sumOfDigit =passValue.toString().split('').map(Number).reduce(function(a, b){
        return a+b;
       }, 0);
      return sumOfDigit    // adding the digit of value
    }
 
    function getlength(number) {
        return number.toString().length;  // find the digit of number.
    }
    
    function newNumber(input){
        
        let sumOfDigit=addDigit(input)
        var digit=getlength(sumOfDigit)   // calling the digit of number and new number....
        var s2 = input.toString().substr(digit) 
        var result = s2.toString().split('').concat(sumOfDigit.toString()).join('')
        const newNum = Number(result)
        document.write(newNum+"<br>")
     
        var array=[]
        array.push(Strore_Array(newNum))
        console.log(array)
        //console.log(Strore_Array(newNum))
        return newNum;
        
    }
  

    function recursive_cal(input) {

       
        let prev_out = addDigit(input);
        let new_out = newNumber(input);
        let new_calc = addDigit(new_out);

      
        
        if(new_calc !== prev_out){

           
        return recursive_cal(new_out);
         }
         
           
        else {
        return new_out;
         }
         
        
        }
        recursive_cal(input)

        function Strore_Array(input){
            var arr=[input]
            arr.push(input)
           console.log(arr)
              }