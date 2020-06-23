function insertionSort(arr) {
    let n = arr.length
    for(let i = 1; i < n; ++i) {
        let key = arr[i]
        let j = i - 1
        // Move elements of arr[0..j-1] greter than key  to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j -= 1
        }
        console.log("insertionSort -> j", j)
        arr[j + 1] = key
    }
    console.log("insertionSort -> arr", arr)
}

const testcase1 = insertionSort([12, 11, 13, 5, 6]);
