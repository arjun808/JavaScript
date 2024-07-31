const temp=()=>{
    console.log("data is fatching.....")
}

const debounce=(fn,delay)=>{
    let time;
    return (...args)=>{
        let context=this;
        clearTimeout(time)
        time=setTimeout(()=>{
            fn.apply(context,...args);

        },300)
    }

}
const debounceFunction=debounce(temp,300);

