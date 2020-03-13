
function posNegSort(arr) {
    let newArray=[]
	arr.forEach((value) =>{
         if(value >= 0){ 
            newArray.push(value)
            }})
        newArray.sort((a,b)=>a-b)
         console.log(newArray)
         j = 0
         for ( let index = 0; index < arr.length; index++) 
        { 
         // If current element is non-negative then  update it such that all the  non-negative values are sorted 
         if (arr[index] >= 0)  
        { 
            arr[index] = newArray[j]; 
            j++; 
        } 
     } 
  console.log(arr) 
   }
 posNegSort([10,6,-1,4,8,-7,1])