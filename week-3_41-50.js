// 41.	groupSum : Given an array of ints, is it possible to choose a group of some of the ints, such that the group sums to the given target? This is a classic backtracking recursion problem. Once you understand the recursive backtracking strategy in this problem, you can use the same pattern for many problems to search a space of choices. Rather than looking at the whole array, our convention is to consider the part of the array starting at index start and continuing to the end of the array. The caller can specify the whole array simply by passing start as 0. No loops are needed -- the recursive calls progress down the array.
// groupSum(0, [2, 4, 8], 10) → true
// groupSum(0, [2, 4, 8], 14) → true
// groupSum(0, [2, 4, 8], 9) → false
function groupSum(start, arr, target) {
    if (start >= arr.length) {
        return (target == 0);
    }
    if (groupSum(start + 1, arr, target - arr[start])) return true;
    if (groupSum(start + 1, arr, target)) return true;

    return false;
}
console.log(groupSum(0, [2, 4, 8], 9));

// 42.	splitArray : Given an array of ints, is it possible to divide the ints into two groups, so that the sums of the two groups are the same. Every int must be in one group or the other. Write a recursive helper method that takes whatever arguments you like, and make the initial call to your recursive helper from splitArray(). (No loops needed.)
// splitArray([2, 2]) → true
// splitArray([2, 3]) → false
// splitArray([5, 2, 3]) → true
function splitArray(arr) {
    let index = 0;
    let sum1 = 0;
    let sum2 = 0;
    return recArray(arr, index, sum1, sum2);
}
function recArray(arr, index, sum1, sum2) {
    if (index >= arr.length) {
        return sum1 == sum2;
    }
    let value = arr[index];
    return (recArray(arr, index + 1, sum1 + value, sum2) ||
        recArray(arr, index + 1, sum1, sum2 + value));
}
console.log(splitArray([5, 2, 3]));

// 43.	wordLen : Given an array of strings, return a Map<String, Integer> containing a key for every different string in the array, and the value is that string's length.
// wordLen(["a", "bb", "a", "bb"]) → {"bb": 2, "a": 1}
// wordLen(["this", "and", "that", "and"]) → {"that": 4, "and": 3, "this": 4}
// wordLen(["code", "code", "code", "bug"]) → {"code": 4, "bug": 3}
function wordLen(arrOfString) {
    let map = {};
    for (let i = 0; i < arrOfString.length; i++) {
        if (!(i in map)) {
            map[arrOfString[i]] = arrOfString[i].length;
        }
    }
    return map;
}
console.log(wordLen(["code", "code", "code", "bug"]));

// 44.	pairs : Given an array of non-empty strings, create and return a Map<String, String> as follows: for each string add its first character as a key with its last character as the value.
// pairs(["code", "bug"]) → {"b": "g", "c": "e"}
// pairs(["man", "moon", "main"]) → {"m": "n"}
// pairs(["man", "moon", "good", "night"]) → {"g": "d", "m": "n", "n": "t"}
function pairs(arrOfString) {
    let map = {};
    for (let i = 0; i < arrOfString.length; i++) {
        map[arrOfString[i][0]] = arrOfString[i][arrOfString[i].length - 1];
    }
    return map;
}
console.log(pairs(["man", "moon", "good", "night"]));

// 45.	firstChar : Given an array of non-empty strings, return a Map<String, String> with a key for every different first character seen, with the value of all the strings starting with that character appended together in the order they appear in the array.
// firstChar(["salt", "tea", "soda", "toast"]) → {"s": "saltsoda", "t": "teatoast"}
// firstChar(["aa", "bb", "cc", "aAA", "cCC", "d"]) → {"a": "aaaAA", "b": "bb", "c": "cccCC", "d": "d"}
// firstChar([]) → {}
function firstChar(arrOfString) {
    let map = {};
    for (let i = 0; i < arrOfString.length; i++) {
        if (!map.hasOwnProperty(arrOfString[i][0])) {
            map[arrOfString[i][0]] = arrOfString[i];
        } else {
            let exist = map[arrOfString[i][0]];
            map[arrOfString[i][0]] = exist + arrOfString[i];
        }
    }
    return map;
}
console.log(firstChar(["aa", "bb", "cc", "aAA", "cCC", "d"]));

// 46.	wordMultiple : Given an array of strings, return a Map<String, Boolean> where each different string is a key and its value is true if that string appears 2 or more times in the array.
// wordMultiple(["a", "b", "a", "c", "b"]) → {"a": true, "b": true, "c": false}
// wordMultiple(["c", "b", "a"]) → {"a": false, "b": false, "c": false}
// wordMultiple(["c", "c", "c", "c"]) → {"c": true}
function wordMultiple(arrOfString) {
    let map = {};
    arrOfString.forEach((str) => {
        if (map.hasOwnProperty(str)) {
            map[str] = true;
        } else {
            map[str] = false;
        }
    })
    return map;
}
console.log(wordMultiple(["c", "c", "c", "c"]));

// 47.	Given a matrix, find all its combinations by row. For example,
// [a, b, c]
// [d, e, f]
// [x, y, z]
// its combinations are adx, ady, adz, bdx, …. cfy, cfz
function combinMatrix(depth, matrix, output) {
    let row = matrix[depth];
    let counter;
    if (depth == 0) {
        counter = 0;
        output = [];
        console.log("matrix length: " + matrix.length);
    }

    for (let i = 0; i < row.length; i++) {
        output[depth] = row[i];

        if (depth == (matrix.length - 1)) {
            //print the combination
            console.log(output);
            counter++;
        } else {
            //recursively generate the combination
            combinMatrix(depth + 1, matrix, output);
        }
    }
}
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
combinMatrix(0, matrix, null);

// 48.	Find the two elements that have the smallest difference in a given array.
function smallestDiff(arr) {
    // Sort array in non-decreasing order
    let n = arr.length;
    arr.sort(function (a, b) { return a - b });
    // Initialize difference as infinite
    let diff = Number.MAX_VALUE;
    // Find the min diff by comparing adjacent pairs in sorted array
    for (let i = 0; i < n - 1; i++) {
        if (arr[i + 1] - arr[i] < diff) {
            diff = arr[i + 1] - arr[i];
            console.log(arr[i + 1], arr[i]);
        }
    }
    return diff;
}
console.log(smallestDiff([1, 5, 3, 19, 18, 25]));

// 49.	Given an array of positive and negative integers {-1,6,9,-4,-10,-9,8,8,4} (repetition allowed) sort the array 
// in a way such that the starting from a positive number, the elements should be arranged as one positive and one 
// negative element maintaining insertion order. First element should be starting from positive integer and the resultant 
// array should look like {6,-1,9,-4,8,-10,8,-9,4}
function shiftAndSwap(a, fromIdx, toIdx) {
    let temp = a[toIdx];
    for (let j = toIdx; j > fromIdx; j--) {
        a[j] = a[j - 1];
    }
    a[fromIdx] = temp;
}
function alter(a) {
    let n = a.length;
    if (n < 1) { return; }
    // Keep a check of what type of number is expected.
    // If first element is +ve, then the next expected element is negative
    // and vice-versa.
    let positive = false;
    if (a[0] < 0) {
        positive = true;
    }
    let fromIdx = 1;
    for (let i = 1; i < n; i++) {
        // If we are expecting +ve and we have -ve number then keep moving forward
        // till we get a +ve number. When we get the first +ve number, we will have to move it
        // to fromIdx and shift all others (all -ve) one step forward.
        if (positive) {
            if (a[i] >= 0) {
                // If we expected +ve and current no is also +ve
                if (fromIdx != i) {
                    shiftAndSwap(a, fromIdx, i);
                    i = fromIdx; // We need to move back because we have skipped all -ve numbers
                }
                positive = false;
                fromIdx = i + 1;
            }
        }
        else { // negative
            if (a[i] < 0) {
                if (fromIdx != i) {
                    shiftAndSwap(a, fromIdx, i);
                    i = fromIdx; // We need to move back because we have skipped all +ve numbers
                }
                positive = true;
                fromIdx = i + 1;
            }
        }
    }
    return a;
}
console.log(alter([-1, 6, 9, -4, -10, -9, 8, 8, 4]));

// 50.	You're given an array of integers sorted ( [1,2,3,5,6,7,10]) you need to serialize and compress this array 
// into a string (1-3, 5-7,10)
function compressArrRange(arr) {
    let n = arr.length;
    let i = 0, j = 0;
    let str = "";
    arr.sort(function (a, b) { return a - b });
    while (i < n) {
        // start iteration from the ith array element
        j = i;
        while ((j + 1 < n) && (arr[j + 1] == arr[j] + 1)) {
            j++;
        }
        if (i == j) {
            str += (arr[i] + " ");
            // increment i for next iteration
            i++;
        }
        else {
            // print the consecutive range found
            str += (arr[i] + "-" + arr[j] + "," + " ");
            // move i jump directly to j+1
            i = j + 1;
        }
    }
    return str;
}
console.log(compressArrRange([1, 2, 3, 5, 6, 7, 10]));



