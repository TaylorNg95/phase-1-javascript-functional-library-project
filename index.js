function createArray(collection){
    if(collection.constructor === Array){
        return collection
    } else {
        return Object.values(collection)
    }
}

function myEach(collection, callback){
    const newCollection = createArray(collection)
    newCollection.forEach(item => {
        callback(item)
    })
    return collection
}

function myMap(collection, callback){
    let newCollection = createArray(collection)
    newCollection = newCollection.map(element => {
        return callback(element)
    })
    return newCollection
}

function myReduce(collection, callback, acc){
    const newCollection = createArray(collection)
    let newAcc = acc
    if(acc === undefined){
        newAcc = newCollection[0]
        newCollection.shift()
    }
    const total = newCollection.reduce((newAcc, item) => {
        return callback(newAcc, item, newCollection)
    }, newAcc)
    return total
}

function myFind(collection, predicate){
    const newCollection = createArray(collection)
    const match = newCollection.find(element => {
        return predicate(element)
    })
    return match
}

function myFilter(collection, predicate){
    const newCollection = createArray(collection)
    const matchArray = newCollection.filter(element => {
        return predicate(element)
    })
    return matchArray
}

function mySize(collection){
    const newCollection = createArray(collection)
    return newCollection.length
}

function myFirst(array, n = 0){
    if(n === 0){
        return array[0]
    } else return array.slice(0, n)
}

function myLast(array, n = 0){
    if(n === 0){
        return array[array.length - 1]
    } else return array.slice(-n)
}

function myKeys(object){
    return Object.keys(object)
}

function myValues(object){
    return Object.values(object)
}