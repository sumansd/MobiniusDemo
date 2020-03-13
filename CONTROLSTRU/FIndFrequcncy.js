

function findOccurance(arr){
    var counted = [], count = [];
var i = 0, j = 0, k = 0;
while (k < arr.length) {
    if (counted.indexOf(arr[k]) < 0) {
        counted[i] = arr[k];
        count[i] = 0;
        for (j = 0; j < arr.length; j++) {
            if (counted[i] == arr[j]) {
                count[i]++;
                }
            }
              i++;
                 } 
         else {
        k++;
          }
}
console.log(arr)
console.log(count)
console.log(counted)
let longest=(Math.max(...count));

var findIndex = [];
for (var i = 0; i < count.length; i++){
if (longest == count[i]) findIndex.push(i)
 }

 console.log(findIndex)
 findIndex.forEach((value) => {
 console.log(counted[value])
})

}

findOccurance(['suman','raja','raja','suman',5,4,9,9])