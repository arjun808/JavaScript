const arr = [1,2,[3,4,5,[6,7],8,9,10],[11,12,13,14,15,16]];
const arr1=[1,2,3,4,5,6,7,8,9];
console.log(arr1.slice());
//know i am going to impliment that flat function


const flate = (arr, depth = 1) => {
    if (depth < 1) return arr.slice(); // If depth is less than 1, return a shallow copy of the array
    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            acc.push(...flate(val, depth - 1));
        } else {
            acc.push(val);
        }
        return acc;
    }, []);
}
//the dependency arry is the initial value of the reduce function