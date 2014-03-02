function even(n) {

    return (n%2 === 0)
}

function sum(numlist){

    var sum = 0
    
    for (var i = 0; i < numlist.length; i++){
        sum = sum + numlist[i];
    }
    return sum;

}



function filter(boolean_func, fibonacci_set) {

    new_list = []
    fib_list = fibonacci_set
    for (var i = 0; i < fib_list.length; i++){

        if (even(fib_list[i])) {
            new_list.push(fib_list[i])
        }

    }
    return new_list

}



function fibonacci_set(max){

    if (max > 1) {
        var fib_list = [1]
        var current_fib = 1
        while (current_fib < max) {
            fib_list.push(current_fib)
            current_fib += fib_list[fib_list.length - 2]
            }
    }

    var even_fibs = sum(filter(even,fib_list))
    return even_fibs

    }




console.log(fibonacci_set(100))