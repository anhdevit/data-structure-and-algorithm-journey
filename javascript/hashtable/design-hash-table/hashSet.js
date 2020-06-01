/**
Design a HashSet without using any built-in hash table libraries.

To be specific, your design should include these functions:

add(value): Insert a value into the HashSet. 
contains(value) : Return whether the value exists in the HashSet or not.
remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.
*/

/**
 * Initialize your data structure here.
 */
const MyHashSet = function() {
    this.set = [] 
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add() = function(key) {
    if(this.set.indexOf(key) === -1) {
        this.set.push(key)
    }
}

/**
 * @param {number} key
 * @returns {void}
 */
MyHashSet.prototype.remove() = function(key) {
    const index = this.set.indexOf(key)
    if (index >= 0) {
        delete this.set[index]
    }
}

/**
 * Return true if this set containts the specified element
 * @param {number} key
 * @returns {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return this.set.indexOf(key) >= 0
}

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */