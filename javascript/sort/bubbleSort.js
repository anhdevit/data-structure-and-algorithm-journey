function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function bubbleSort(arr) {
    let isSwap = false
    do {
        isSwap = false
        for (let i = 0; i < arr.length - 1; i++ ) {
            if (arr[i+1] < arr[i] ) {
                swap(arr, i , i+1)
                isSwap = true
            }
        }

    } while(isSwap)
    
    console.log('===========', arr)
}
const testcase1 = bubbleSort([5,1,4,2,8])
