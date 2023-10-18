/**
 * spread operator
 */
const onlyStrings = ["1", "2", "3"]; // string[] 유추
const arr1 = [...onlyStrings]; // string[] 유추

const onlyNumbers = [1, 2, 3]; // number[] 유추
const arr2 = [...onlyStrings, ...onlyNumbers]; // (string | number)[] 유추
