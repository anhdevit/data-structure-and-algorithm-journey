function merge(arr, l, m, r) {
  let n1 = m - l + 1;
  let n2 = r - m;

  let L = [];
  let R = [];

  /*Copy data to temp arrays*/
  for (let i = 0; i < n1; ++i) {
    L.push(arr[l + i]); 
  }
  for (let j = 0; j < n2; ++j) {
    R.push(arr[m + 1 + j]); 
  }

  console.log("merge -> L", L)
  console.log("merge -> R", R)

  /* Merge the temp arrays */

  // Initial indexes of first and second subarrays
  let i = 0;
  let j = 0;
  let k = l;
   // Initial index of merged subarry array 
  while (l < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  /* Copy remaining elements of L[] if any */
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  /* Copy remaining elements of R[] if any */
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l < r) {
    // 1. Find the middle point to divide the array into two halves:
    let m = (l + r) / 2;
    // 2. Call mergeSort for first half:
    mergeSort(arr, l, m);
    // 3. Call mergeSort for second half:
    mergeSort(arr, m + 1, r);
    // 4. Merge the two halves sorted in step 2 and 3:
    merge(arr, l, m, r);
  }
  console.log("mergeSort -> arr", arr);
}

const arr = [38, 27, 43, 3, 9, 82, 10];
const testcase1 = mergeSort(arr, 0, arr.length - 1);
console.log("arr", arr)
