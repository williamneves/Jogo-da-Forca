var keycodes_list_numbers = {
    65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I",
    74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R",
    83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z"
}

function switchKeyValue(objectToConvert) {

    var converted_list = {}

    for (var keycode in objectToConvert) {
        converted_list[objectToConvert[keycode]] = keycode
    }

    return converted_list;
}

var newObject = switchKeyValue(keycodes_list_numbers)

console.log(`New Var = ${newObject.toString()}`)

// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

var keycodes_list = {
    "A": 65,
    "J": 74,
    "S": 83,
    "B": 66,
    "K": 75,
    "T": 84,
    "C": 67,
    "L": 76,
    "U": 85,
    "D": 68,
    "M": 77,
    "V": 86,
    "E": 69,
    "N": 78,
    "W": 87,
    "F": 70,
    "O": 79,
    "X": 88,
    "G": 71,
    "P": 80,
    "Y": 89,
    "H": 72,
    "Q": 81,
    "Z": 90,
    "I": 73,
    "R": 82
}
