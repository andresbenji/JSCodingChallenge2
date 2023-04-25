//function that filters out negative numbers
function removeNegative(numbers) {
  return numbers.filter(function (numbers) {
    return numbers > 0;
  });
}

let numbers = [1, -5, 3, -5, 6, -7, 5];

console.log(removeNegative(numbers));
