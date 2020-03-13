function removeLastVowel(str) {
    let resultString = [];
     let newArray=[]
    let splitString=str.split(' ')
    splitString.forEach(obj=>{
    resultString.push(obj);

    

           let pattern = /[aeiouAEIOU]/gim;
           let result = [...obj.match(pattern)]
           let vowel= result[result.length - 1]     // get the vowel of last index....
           let position= obj.lastIndexOf(vowel)+1
           let newStr = obj.substring(0,position - 1) + obj.substring(position, obj.length); // remove the element in string
          
           newArray.push(newStr)
         
     
         
        })  // close the for each loop...............
       
       return(newArray.join(" "))
}

   ((removeLastVowel("Thoses sddi")))
