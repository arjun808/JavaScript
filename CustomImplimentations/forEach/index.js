Array.prototype.myForEach=function(cb){
    for(let i=0;i<this.length;i++){
        cb(this[i],i,this);
    }
}
const testingArry=[1,2,4,5,6,7,8,9]
testingArry.myForEach((nums)=>{
    console.log(nums);
})