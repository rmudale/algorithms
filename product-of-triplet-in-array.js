//Find product of triplet in a given array
function tripletProd(n, sum)
{
    var first, last;
    var arr_size = n.length;
 
    n.sort((a, b) => a - b); //Sort array by numbers
 
    for (var i = 0; i < arr_size - 2; i++) 
    {
        first = i + 1; 
        last = arr_size - 1; 

        while (first < last) 
        {
            if (n[i] * n[first] * n[last] == sum)
            {
                console.log("Triplet is  "+n[i]+'->'+n[first]+"->"+n[last]);
                return true;
            }
            else if (n[i] * n[first] * n[last] < sum) {
            		console.log('First :', n[i], n[first], n[last]);
                console.log('------------');
                first++; //Increment from lower index
            } else {
            		console.log('last :', n[i], n[first], n[last]);
                console.log('------------');
                last--; //Decrease higher index
            }
        }
    }
 
    return false;
}

console.log(tripletProd([2,3,4,5,6,10],72));
