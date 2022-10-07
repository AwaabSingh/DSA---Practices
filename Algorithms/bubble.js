const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (j = 0; j < length; j++) {
      // check
      if (array[j] > array[j + 1]) {
        // getting the current value
        let temp = array[j];
        // moving index
        array[j] = array[j + 1];
        // set next index to current value
        array[j + 1] = temp;
      }
    }
  }
}

bubbleSort(numbers);

console.log(numbers);
