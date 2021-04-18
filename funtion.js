function add(number1,number2,number3){
    var sum =  number1 + number2 + number3;
    return sum;
}
var result =  add(10,20,30);
console.log(result);


function add2(numbers){
    var sum = numbers[0] + numbers[1] + numbers[2];
    return sum;
}
var result2 = add2([10,20,40]);
console.log(result2);

function add3(numbers){
    var sum = 0;
    for(var i = 0; i<numbers.length; i++)
    sum = sum + numbers[i];
    return sum;
}
var result3 = add3([1,2,3,4,5,6,7,8,9]);
console.log(result3);