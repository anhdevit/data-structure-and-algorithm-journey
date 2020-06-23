function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function selectionSort(arr) {

    let i = 0
    let _length = arr.length - 1
    while (i < _length) {
        let minItem = i
        for (let j = i + 1; j <= _length; j++) {
            if (arr[j] < arr[minItem]) {
                minItem = j
            }
        }
        swap(arr, i, minItem)
        i++
    }
  console.log("selectionSort -> arr", arr);
}

const testcase1 = selectionSort([64, 25, 12, 22, 11]);
