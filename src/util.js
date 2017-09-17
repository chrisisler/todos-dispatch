/** @type {(Any, [Any]) -> Any} */
export function without(item, arr) {
    let arrCopy = arr.slice()
    arrCopy.splice(arrCopy.indexOf(item), 1)
    return arrCopy
}
