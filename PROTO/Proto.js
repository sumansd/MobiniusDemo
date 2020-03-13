// function Mobile(){
//     this.a=10
// }
// Mobile.prototype.z=30
//  var m=new Mobile()
//  function Samsung(){
//      Mobile.call(this);
//      this.b=20;
//  }

//  Samsung.prototype=Object.create(Mobile.prototype)
//  var s = new Samsung()
//  console.log(s.a)
//  console.log(s.b)
//  console.log(s.z)


// ---  Note--- ${this.modelno} the this is required when your assgin variable and pass variable is diffirent.........

// function Mobile(model,color,price,sp)
// {
//     this.modelno=model;
//     this.color= color
//     this.price=price
//     this.sp=sp
//     this.total = price+sp


 /* //   this.total= function(){
  //       return price+sp   
  // }     // use inside function also.......
*/


// this.data= function(){
// document.write(`the model is ?  ${this.modelno} and the color is ${color} the price is not difine <br> the total price is ${this.total}` )
//     }
// }
// var samsung = new Mobile('S10','red',70000,2000)
// var MI = new Mobile('poco','blue',18000,3000)
// samsung.modelno= 'suman'
// samsung.data()
// MI.data()

class Mobile{
  constructor(){
    this.name='suman'
    console.log(this.name)
  }
}
 var s= new Mobile()
 s.name="roja"
 
 
parsef


str.split(" ").reverse().join(" ").split("").reverse().join("")


arr.toString().join(",")