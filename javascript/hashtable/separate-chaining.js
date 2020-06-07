class HashTable {
    constructor(size = 42) {
        this.buckets = new Array(size)
        this.size = size
    }

    hash(key) {
        return key.toString().length % this.size
    }

    set(key, value) {
        let index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        this.buckets[index].push([key, value])
        return index
    }

    get(key) {
        // index of the bucket
        let index = this.hash(key);

        // if there is no bucket
        if (!this.buckets[index]) return null

        for (let bucket of this.buckets[index]) {
            // if key matches
            if (bucket[0] === key) {
                //value
                return bucket[1]
            }
        }
    }
}