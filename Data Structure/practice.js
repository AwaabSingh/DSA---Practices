// Reveser a string

const reverseStr = (str) => {
  // check if input is a string
  if (!str || str.length < 2 || str.typeof === 'string') {
    return 'invalid input';
  }

  const backwards = [];

  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
};

const result = reverseStr('Hello world');

// or

const revStr = (str) => str.split('').reverse().join('');

// console.log("rev", revStr("Hello world"));
// console.log(result);

// Merge Arrays
const mergeSortedArray = (array1, array2) => {
  let merged = [];

  let array1Item = array1[0];
  let array2Item = array2[0];

  //   Check for vaild inputs
  if (array1.length === 0) {
    return array2;
  }

  if(array2.length === 0) {
     return array1
  }

  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if(!array2Item || array1Item < array2Item) {
        merged.push(array1Item)
        array1Item = array1[i]
        i++
    } else {
        merged.push(array2Item);
        array2Item = array2[j]
        j++
    }
  }
  return merged;
};

const res = mergeSortedArray([0, 3, 4, 31], [4, 6, 31]);
console.log(res);

