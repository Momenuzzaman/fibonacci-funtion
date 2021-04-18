function fibonacci(num){
    if(num == 0){
        return 0;
    }
    if(num == 1){
         return 1;
    }
    else{
        return fibonacci(num-1) + fibonacci(num-2);
    }
}
var result = fibonacci(5);
console.log(result);

// 2nd system
 function fibonacci2ndSystem(num){
     var fibo = [0,1];
     for(var  i = 2; i<num; i++ ){
         var  nextFibo = fibo[i-1] + fibo[i-2];
         fibo.push(nextFibo);
     }
     return fibo;
 }
 var result = fibonacci2ndSystem(5);
 console.log(result);