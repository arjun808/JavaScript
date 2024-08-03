const arr=[1,2,4,5,6,7];
  
Array.prototype.myMap=function(cb){
    let resultArry=[]
    for(let i=0;i<this.length;i++){
        resultArry.push(cb(this[i],i,this));
    }
    return resultArry;
}
// arr.myMap((num)=>{
//     console.log(num*2);
// })
Array.prototype.myFilter=function(cb){
    let resultArry=[];
    for(let i=0;i<this.length;i++){
    if(cb(this[i],i,this)){
        resultArry.push(this[i]);
    }
    }
    return resultArry;
}
 const my=arr.myFilter((num)=>{
     return num>2;
 })


 Array.prototype.myReduce=function(cb,initialValue){
    var acc=initialValue;
    for(let i=0;i<this.length;i++){
        acc=acc?cb(acc,this[i],i,this):this

    }
    return acc
 }




 Array.prototype.meramap=function(cb){
    let result=[];
    for(let i=0;i<this.length;i++){
        result.push(cb(this[i],i,this))
    }
    


 }
 const arrrr=[1,2,4,56,7];
 arrrr.meramap((nums,i)=>{
    console.log(nums,i);

 })