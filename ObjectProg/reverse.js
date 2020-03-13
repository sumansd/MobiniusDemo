function reverseOdd(str) {
    let resultString = [];
    let splitString = str.split(' ');
        splitString.forEach(obj =>{
           if(obj.length%2 == 0){
                resultString.push(obj);
            }
            else{
                resultString.push(obj.split("").reverse().join(""));
             }
    } )
    
    console.log(resultString.toString().concat())
    }
 
 reverseOdd("One two three four")
 reverseOdd('Make sure uoy only esrever sdrow of ddo length')
 reverseOdd('')
 reverseOdd('Bananas')
 reverseOdd('Even even even even even even even even even')
 reverseOdd('Odd odd odd odd odd odd odd odd odd odd odd')

//==========================================================================================================//

