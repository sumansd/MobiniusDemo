function getLength(arr) {
    if(arr.length>0){
  var result=  arr.toString().split(',')
    return result.length}
    else return 0;
}
document.write(getLength([10,20,[10,60]])+"<br>")
document.write(getLength([]))


