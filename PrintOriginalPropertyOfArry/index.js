const arr=[1,2,4,5,6,8];
Array.prototype.arjun="patidar";
for(let v in arr){
    if(arr.hasOwnProperty(v)){

        console.log(v);
    }
}