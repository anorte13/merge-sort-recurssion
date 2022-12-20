let numArray = [0, 3, 1, 2, 24, 23, 1];

function mergeSort(arr) {
  if (arr === 1) {
    return arr;
  }
  let mid = arr.length / 2;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  let sortedArray = [];

  ((l, r) => {
    let i = 0;
    let j = 0;
    while (i < l.length && j < r.length) {
      if (l[i] < r[j]) {
        sortedArray.push(l[i++]);
      } else {
        sortedArray.push([r[j++]]);
      }
    }
    while (i < l.length) {
      sortedArray.push(l[i++]);
    }
    while (j < r.length) {
      sortedArray.push([r[j++]]);
    }
  })(left, right);
  return sortedArray;
}
