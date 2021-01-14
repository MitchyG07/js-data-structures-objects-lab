// Write your solution in this file 
function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, {[key]: value})
}

function deleteFromDriverByKey(obj, key) {
    let newObj = Object.assign({}, obj)
    delete newObj[key];
    return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key];
    return obj
}

const driver = { car: 'ford'}
const newDriver = destructivelyUpdateDriverWithKeyAndValue(driver,'car','Mercedes')

const anotherDriver = deleteFromDriverByKey(driver, 'car')