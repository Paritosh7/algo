function shiftArr(arr, idx, ele) {
  var newArr = [];
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (i === idx) {
      newArr[j++] = ele;
    }
    newArr[j++] = arr[i];
  }
  return newArr;
}

function shiftArrInPlace(arr, idx, ele) {
  let temp;
  for (let i = idx; i <= arr.length; i++) {
    temp = arr[i];
    if (i === idx) arr[i] = temp;

    arr[i] = ele;
  }
}

console.log(shiftArr([1, 2, 3, 4, 5], 2, 90));
