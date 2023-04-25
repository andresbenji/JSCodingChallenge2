//function that filters out negative numbers (numbers that are less than 0)
function removeNegative(numbers) {
  return numbers.filter(function (numbers) {
    return numbers > 0;
  });
}

//add values to the array numbers
let numbers = [1, -5, 3, -5, 6, -7, 5, 10, -15];

//output the function with the array as an argument
console.log(removeNegative(numbers));
