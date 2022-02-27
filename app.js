/* Complete the function that takes a non - negative integer n as input, 
and returns a list of all the powers of 2 with the exponent ranging from 0 to n(inclusive).*/

//Example
/*n = 0 ==> [1]       #[2^0]
  n = 1 ==> [1, 2]      #[2^0, 2^1]
  n = 2 ==> [1, 2, 4]   #[2^0, 2^1, 2^2]  */

function powersOfTwo(n) {
    var myArray = []
    for (var i = 0; i <= n; i++) {
        myArray.push(2 ** i);
    }
    return myArray
}
const result = powersOfTwo(2)
console.log(result)
