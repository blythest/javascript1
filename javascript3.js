// Write a function that returns any items in the array that are duplicated. 
// The data contained in the array may be an integer or a string, or a boolean, 
// but it will not be an array or a javascript object.


function getDuplicates(iterable) {

    
    var new_list = []
    for (var i = 0; i < iterable.length; i++) {
        for (var j = i + 1; j <iterable.length; j++) {
            // if the value of the inner list matches the outer AND if 
            // we haven't already seen this value in the new list, add it. 
            // indexOf: get the index for a specific value. any index > 0 means it's in the list.
            
            if (iterable[j] === iterable[i] && new_list.indexOf(iterable[j]) < 0) {
                new_list.push(iterable[j])
                break;

            }
        }
    }
    return new_list
}

// var votesToGoEatCake = [true, true, false, true, true, false, false,false]
// console.log(getDuplicates(votesToGoEatCake))