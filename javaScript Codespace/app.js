const arr1=[1,2,2,3,4,4]
const arr2=[2,2,4,5,5,6,2000]
const ans=[]
let i=0;
let j=0;
while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        i++;
    }
    else if(arr1[i]>arr2[j]){
        j++;
    }
    else {
        ans.push(arr1[i]);
        i++;
        j++;
    }
}
console.log(ans);
