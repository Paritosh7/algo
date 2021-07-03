function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var smallest = arr[i];
    var smallestEleIdx = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (smallest > arr[j]) {
        smallest = arr[j];
        smallestEleIdx = j;
      }
    }
    if (smallestEleIdx != -1) {
      var temp = arr[i];
      arr[i] = smallest;
      arr[smallestEleIdx] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
