var duplicateZeros =  function(arr) {
    let posibleDups = 0
    let _length = arr.length - 1
    for (let left = 0; left <= _length - posibleDups; left++) {
        console.log("duplicateZeros -> posibleDups", posibleDups)
        console.log("duplicateZeros -> left", left)
        if (arr[left] === 0) {
            if (left === _length - posibleDups) {
                arr[_length] = 0;
                _length -= 1
                break
            }
            posibleDups++
        }
    }
    console.log("duplicateZeros -> _length", arr)
    console.log("duplicateZeros -> posibleDups", posibleDups)


    let last = _length - posibleDups

    for(let i = last; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[i + posibleDups] = 0
            posibleDups--
            arr[i + posibleDups] = 0
        } else {
            arr[i + posibleDups] = arr[i]
        }
    }
    console.log("duplicateZeros -> arr", arr)
    console.log("duplicateZeros -> timeComplexcity", timeComplexcity)
}

const testcase1 = duplicateZeros([1,0,2,3,0,4,5,0])
const testcase2 = duplicateZeros([1,2,3])