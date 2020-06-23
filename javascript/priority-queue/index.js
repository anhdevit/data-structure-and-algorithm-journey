class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    //helper method that swaps the values and two indexes of an array
    swap(index1, index2) {
        let temp = this.values[index1]
        this.values[index1] = this.values[index2]
        this.values[index2] = temp
        return this.values
    }

    //helper methods that bubbles up values from end
    bubbleUp() {
        // get index of inserted element
        let index = this.values.length - 1
        
    }
}