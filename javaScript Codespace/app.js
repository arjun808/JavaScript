function memo(fun) {
    const cache = {};
    return function (...args) {
      const key = JSON.stringify(args);
      if (!(key in cache)) {
        cache[key] = fun(...args);
      } else {
        return cache[key];
      }
    };
  }
  
  
   function temp(num1,num2) {
   
    for(let i=0;i<5000;i++){
      
    }
    return num1*num2;
    
  }
  
  console.log(temp(1,2))
  const memoTemp=memo(temp);
  console.log(memoTemp(1,2));




  function myMemo(fun){
    let cache={}
    return function(...args){
        const key= JSON.stringify(args);
        
    }

  }