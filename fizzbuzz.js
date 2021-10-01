function fizzBuzz(start,end){
    for(let num=start; num<=end;num++){
        if(num% 5== 0 && num% 3==0){
            console.log("FizzBuzz")
        }
        else if(num %3==0){
            console.log("fizz")
        }
        else if(num % 5==0){
            console.log("buzz")
        }
        else{
            console.log(num)
        }
    }
}