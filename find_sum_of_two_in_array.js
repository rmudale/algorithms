let find_sum_of_two = function(A, val) {
    let foundValues = new Set();

    console.log(A);

    for(let a in A) {
        if(foundValues.has(val - A[a])) {
            return true;
        }

        foundValues.add(A[a]) //set = {2,3,4,5,4}
    }
    console.log(foundValues);

    return false;
}


let A = [2, 3, 4, 5, 6];

console.log(find_sum_of_two(A, 10));
