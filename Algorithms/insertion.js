const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
      const length = array.length;

      for(let i = 0; i < length; i++) {
        // item is less than the fist index
         if(array[i] < array[0]) {
        //    move item to the frist index 
            array.unshif(array.splice(i,1)[0])
         } else {
            //   find where the value should go
            for(let j = 0; j < i; j++) {
                 if(array[i] > array[j-1] && array[i] < array[j]) {
                     array.splice(j,0,array.splice(i, 1)[0])
            }
         }
      }
}
}