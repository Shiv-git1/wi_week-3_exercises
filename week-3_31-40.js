// 31.	scoresIncreasing : Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.
// scoresIncreasing([1, 3, 4]) → true
// scoresIncreasing([1, 3, 2]) → false
// scoresIncreasing([1, 1, 4]) → true
function scoresIncreasing(arr) {
    let increasing = false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] >= arr[i]) {
            increasing = true;
        } else {
            return false;
        }
    }
    return increasing;
}
console.log(scoresIncreasing([1, 3, 2]));

// 32.	wordsCount: Given an array of strings, return the count of the number of strings with the given length.
// wordsCount(["a", "bb", "b", "ccc"], 1) → 2
// wordsCount(["a", "bb", "b", "ccc"], 3) → 1
// wordsCount(["a", "bb", "b", "ccc"], 4) → 0
function wordsCount(arrOfString, index) {
    if (index == arrOfString.length) return 0;
    let length = arrOfString[index].length;
    return length;
}
console.log(wordsCount(["a", "bb", "b", "ccc"], 4));

// 33.	wordsWithoutList: Given an array of strings, return a new List (e.g. an ArrayList) where all the strings of the given length are omitted. 
// wordsWithoutList(["a", "bb", "b", "ccc"], 1) → ["bb", "ccc"]
// wordsWithoutList(["a", "bb", "b", "ccc"], 3) → ["a", "bb", "b"]
// wordsWithoutList(["a", "bb", "b", "ccc"], 4) → ["a", "bb", "b", "ccc"]
function wordsWithoutList(arrOfString, len) {
    for (let i = 0; i < arrOfString.length; i++) {
        if (arrOfString[i].length == len) {
            arrOfString.splice(i, 1);
        }
    }
    return arrOfString;
}
console.log(wordsWithoutList(["a", "bb", "b", "ccc"], 3));

// 34.	copyEvens: Given an array of positive ints, return a new array of length "count" containing the first even numbers from the original array. The original array will contain at least "count" even numbers.
// copyEvens([3, 2, 4, 5, 8], 2) → [2, 4]
// copyEvens([3, 2, 4, 5, 8], 3) → [2, 4, 8]
// copyEvens([6, 1, 2, 4, 5, 8], 3) → [6, 2, 4]
function copyEvens(arr, count) {
    let outputArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            outputArr.push(arr[i]);
        }
        if (outputArr.length >= count) return outputArr;
    }
}
console.log(copyEvens([6, 1, 2, 4, 5, 8], 3));

// 35.	matchup : Given 2 arrays that are the same length containing strings, compare the 1st string in one array to the 1st string in the other array, the 2nd to the 2nd and so on. Count the number of times that the 2 strings are non-empty and start with the same char. The strings may be any length, including 0.
// matchUp(["aa", "bb", "cc"], ["aaa", "xx", "bb"]) → 1
// matchUp(["aa", "bb", "cc"], ["aaa", "b", "bb"]) → 2
// matchUp(["aa", "bb", "cc"], ["", "", "ccc"]) → 1
function matchUp(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i][0] == arr2[i][0]) count++
    }
    return count;
}
console.log(matchUp(["aa", "bb", "cc"], ["", "", "ccc"]));

// 36.	scoreUp : The "key" array is an array containing the correct answers to an exam, like {"a", "a", "b", "b"}. the "answers" array contains a student's answers, with "?" representing a question left blank. The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer.
// scoreUp(["a", "a", "b", "b"], ["a", "c", "b", "c"]) → 6
// scoreUp(["a", "a", "b", "b"], ["a", "a", "b", "c"]) → 11
// scoreUp(["a", "a", "b", "b"], ["a", "a", "b", "b"]) → 16
function scoreUp(arr1, arr2) {
    let total = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[i]) total += 4
        else total -= 1
        if (arr2[i] == "?") total += 1;
    }
    return total;
}
console.log(scoreUp(["a", "a", "b", "b"], ["a", "a", "b", "c"]));

// 37.	wordsWithout : Given an array of strings, return a new array without the strings that are equal to the target string. One approach is to count the occurrences of the target string, make a new array of the correct length, and then copy over the correct strings.
// wordsWithout(["a", "b", "c", "a"], "a") → ["b", "c"]
// wordsWithout(["a", "b", "c", "a"], "b") → ["a", "c", "a"]
// wordsWithout(["a", "b", "c", "a"], "c") → ["a", "b", "a"]
function wordsWithout(arrOfString, target) {
    for (let i = 0; i < arrOfString.length; i++) {
        if (arrOfString[i] == target) {
            arrOfString.splice(i, 1);
        }
    }
    return arrOfString;
}
console.log(wordsWithout(["a", "b", "c", "a"], "b"));

// 38.	sumHeights : We have an array of heights, representing the altitude along a walking trail. Given start/end indexes into the array, return the sum of the changes for a walk beginning at the start index and ending at the end index. For example, with the heights {5, 3, 6, 7, 2} and start=2, end=4 yields a sum of 1 + 5 = 6. The start end end index will both be valid indexes into the array with start <= end.
// sumHeights([5, 3, 6, 7, 2], 2, 4) → 6
// sumHeights([5, 3, 6, 7, 2], 0, 1) → 2
// sumHeights([5, 3, 6, 7, 2], 0, 4) → 11
function sumHeights(arrOfHeights, start, end) {
    let sum = 0;
    for (let i = start; i <= end - 1; i++) {
        sum += Math.abs(arrOfHeights[i] - arrOfHeights[i + 1]);
    }
    return sum;
}
console.log(sumHeights([5, 3, 6, 7, 2], 2, 4));

// 39.	mergeTwo : Start with two arrays of strings, A and B, each with its elements in alphabetical order and without duplicates. Return a new array containing the first N elements from the two arrays. The result array should be in alphabetical order and without duplicates. A and B will both have a length which is N or more. The best "linear" solution makes a single pass over A and B, taking advantage of the fact that they are in alphabetical order, copying elements directly to the new array.
// mergeTwo(["a", "c", "z"], ["b", "f", "z"], 3) → ["a", "b", "c"]
// mergeTwo(["a", "c", "z"], ["c", "f", "z"], 3) → ["a", "c", "f"]
// mergeTwo(["f", "g", "z"], ["c", "f", "g"], 3) → ["c", "f", "g"]
function mergeTwo(arr1, arr2, len) {
    let outputArr = [];
    let aIndex = 0;
    let bIndex = 0;
    for (let i = 0; i < len; i++) {
        if (arr1[aIndex].localeCompare(arr2[bIndex]) < 0) {
            outputArr[i] = arr1[aIndex];
            aIndex++;
        } else if (arr1[aIndex].localeCompare(arr2[bIndex]) > 0) {
            outputArr[i] = arr2[bIndex];
            bIndex++;
        } else {
            outputArr[i] = arr1[aIndex];
            aIndex++;
            bIndex++;
        }
    }
    return outputArr;
}
console.log(mergeTwo(["f", "g", "z"], ["c", "f", "g"], 3));

// 40.	commonTwo : Start with two arrays of strings, a and b, each in alphabetical order, possibly with duplicates. Return the count of the number of strings which appear in both arrays. The best "linear" solution makes a single pass over both arrays, taking advantage of the fact that they are in alphabetical order.
// commonTwo(["a", "c", "x"], ["b", "c", "d", "x"]) → 2
// commonTwo(["a", "c", "x"], ["a", "b", "c", "x", "z"]) → 3
// commonTwo(["a", "b", "c"], ["a", "b", "c"]) → 3
function commonTwo(arr1, arr2) {
    let count = 0;
    let str = "";
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] == (arr2[i]) && !str.includes(arr1[j])) {
                str += arr1[j];
                count++;
            }
        }
    }
    return count;
}
console.log(commonTwo(["a", "c", "x"], ["b", "c", "d", "x"]));
