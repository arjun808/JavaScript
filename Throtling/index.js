console.log("connection done")
let flag = true;
let timer;

const handleClick = () => {
    if (flag) {
        console.log("You clicked me");
        flag = false;
    }



    timer = setTimeout(() => {
        flag = true;
    }, 3000);
};
// setInterval(()=>{
//     alert("jay shree ram")
// },900)