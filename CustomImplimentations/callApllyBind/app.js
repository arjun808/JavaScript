//1. polyfill for CALL





const namee={
    firstName:"Arjun",
    lastName:"Patidar"
}
function fullName(age){
    console.log(this.firstName+" "+this.lastName+" is "+age);
}

// arjun laga dimaak iska polyfill bnanae ka 
Function.prototype.myCall=function(contex={},...args){
    if(typeof this!=="function"){
        throw new Error(this +" is not a function call is only working on function")
    }
    contex.fun=this;
    contex.fun(...args);
    
}
// fullName.myCall(namee,24);  
//2.polyfill for an apply
Function.prototype.myApply=function(context={},args=[]){
    if(typeof this!=="function"){
        throw new Error(this +" is not a function call is only working on function")
    }
    if(!Array.isArray(args)){
        throw new Error("args should be an arry in apply")
    }
    context.fun=this;
    context.fun(...args)


}
// fullName.myApply(namee,[24]);
//polyfill for bind 

Function.prototype.myBind=function(context={},...args){
    if(typeof this!=="function"){
        throw new Error(this +" is not a function call is only working on function")
    }
    context.fun=this;
    return function(...newargs){
        return context.fun(...args,...newargs);
    }   

}
const newBindDunction=fullName.myBind(namee); 
console.log(newBindDunction(24));


