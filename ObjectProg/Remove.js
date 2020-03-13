function reverseOdd(str) {

    let splitString = str.replace(/\s/g, "") 

    console.log(splitString.length) // remove space
          if(splitString.length %2 === 0){
               return str
            }
           else
               {
                  if((str.indexOf(' ') >= 0))    // if it is a sentence..........
                 {
                    let findLast_item= str.split(" ").splice(-1).toString().split("").reverse().join("")
                    let remove_last= str.lastIndexOf(" ");
                    let newString = str.substring(0, remove_last);
                    let mergeString = newString.concat(" ").concat(findLast_item)
                  //  console.log(mergeString)
                    let result= mergeString.split(" ").reverse().
                    join(" ").split("").reverse().join("")
                    return result	 
                   }
                  // inner if close .....
                  else{
                     let result= str.split("").reverse().join("")
                      return result	
                      }    //  inner else close .....
                      }  // outer else close .....
        }

console.log(reverseOdd('Even even even even even even even even even'))
console.log(reverseOdd("One two three four"))
