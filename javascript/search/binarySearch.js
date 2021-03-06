// const binarySearch = (arr, x, start, end) => {
//     console.log("binarySearch -> start", start)
//     if (start > end) return false
//     let mid=Math.floor((start + end)/2);
//     if (arr[mid] === x) return true
//     if (arr[mid] > x) {
//         return binarySearch(arr, x, start, mid - 1)
//     } else {
//         return binarySearch(arr, x, mid + 1, end)
//     }
// }

const binarySearch = (arr, x) => {
    let start = 0, end=arr.length-1; 
    while(start <= end) {
        let mid = Math.floor((start + end)/2)
        if (arr[mid] === x) return true
        else if (arr[mid] < x) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return false
};

let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

const testcase1 = binarySearch(arr, x, 0, arr.length - 1);
console.log("testcase1", testcase1);
