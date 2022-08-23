function square(number) {
  return number * number;
}

console.log(square(4));




const arrayNumbers = [1, 2, 3, 4, 5, 6];

function square2(array, func) {
  return array.map((t) => func(t));
}

console.log(square2(arrayNumbers, square))
