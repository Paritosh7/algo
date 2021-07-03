function binarySearch(arr, ele) {
  var start = 0;
  var end = arr.length - 1;
  var mid = Math.floor((start + end) / 2);
  var count = 0;

  while (start <= mid) {
    count++;
    if (ele === arr[mid]) return { mid, count };
    else if (ele > arr[mid]) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    }
  }
  return { mid: "none", count };
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
