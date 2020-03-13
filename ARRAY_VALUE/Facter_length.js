function factorSort(nums) {
   let factorial_digit=[]
	nums.forEach((value) => {
       let count =0;
        for (let i=1;i<=value;i++){
               if(value%i==0){
                count++} }
     factorial_digit.push(count)
})
var result = {};for (var i = 0; i < nums.length; i++) {
result[nums[i]] = factorial_digit[i];}
console.log(result)

keysSorted = Object.keys(result).sort(function(a,b){
    if(b.keysSorted-a.keysSorted===0){
        return result.keys[a]+result.keys[b]
        }
        else{
        return result[b]-result[a]
         }
// if(b>a){
//  return result[b]-result[a] }
})
console.log(keysSorted) 
}
(factorSort([9,7,13,12]))   