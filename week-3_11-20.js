// 11. There are numbers from 1 to N in an array. Out of these, some numbers get duplicated and one is missing. The task is to find out the duplicate number.
function duplicateNum(arr) {
    let size = arr.length;
    let i;
    console.log("The repeating elements are:");
    for (i = 0; i < size; i++) {
        let posValue = Math.abs(arr[i]);
        if (arr[posValue] >= 0)
            arr[posValue] = -arr[posValue];
        else
            console.log(posValue + " ");
    }
}
duplicateNum([1, 2, 3, 1, 3, 6, 6]);

// 12.	array123: Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.
// array123([1, 1, 2, 3, 1]) → true
// array123([1, 1, 2, 4, 1]) → false
// array123([1, 1, 2, 1, 2, 3]) → true
function array123(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 1) i++
        if (arr[i] == 1 && arr[i + 1] == 2 && arr[i + 2] == 3) {
            count++
        }
    }
    if (count >= 1) return true
    else return false;
}
console.log(array123([1, 1, 2, 1, 2, 3]));

// 13.	arrayCount9: Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.
// arrayFront9([1, 2, 9, 3, 4]) → true
// arrayFront9([1, 2, 3, 4, 9]) → false
// arrayFront9([1, 2, 3, 4, 5]) → false
function arrayCount9(arr) {
    for (let i = 0; i <= 3; i++) {
        if (arr[i] == 9) return true
    }
    return false;
}
console.log(arrayCount9([1, 5, 3, 4, 9]));

// 14.	array667: Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second "6" is actually a 7.
// array667([6, 6, 2]) → 1
// array667([6, 6, 2, 6]) → 1
// array667([6, 7, 2, 6]) → 1
function array667(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 6) i++
        if (arr[i] == 6 && arr[i + 1] == 6 || arr[i + 1] == 7) {
            count++
        }
    }
    return count;
}
console.log(array667([6, 5, 2, 6, 7]));

// 15.	noTriples : Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.
// noTriples([1, 1, 2, 2, 1]) → true
// noTriples([1, 1, 2, 2, 2, 1]) → false
// noTriples([1, 1, 1, 2, 2, 2, 1]) → false
// const arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
const findLongestSequence = (arr = []) => {
    const res = arr.reduce((acc, val, ind) => {
        if (acc.length && acc[acc.length - 1][0] === val) {
            acc[acc.length - 1].push(val);
        } else {
            acc.push([val]);
        };
        return acc;
    }, []).reduce((acc, val) => {
        return val.length > acc.length ? val : acc;
    }); return res.length;
}
// console.log(findLongestSequence(arr));
function noTriples(arr) {
    let length = findLongestSequence(arr)
    if (length == 3) return false
    else return true;
}
console.log(noTriples([2, 1, 1, 1, 2, 3, 3, 2, 2, 1]));

// 16.	matchup: Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal.
// matchUp([1, 2, 3], [2, 3, 10]) → 2
// matchUp([1, 2, 3], [2, 3, 5]) → 3
// matchUp([1, 2, 3], [2, 3, 3]) → 2
function matchUp(nums1, nums2) {
    let count = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (Math.abs(nums1[i] - nums2[i]) <= 2) count++
        if (Math.abs(nums1[i] - nums2[i]) == 0) count--
    }
    return count;
}
console.log(matchUp([1, 2, 3], [2, 3, 3]));

// 17.	modThree : Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other.
// modThree([2, 1, 3, 5]) → true
// modThree([2, 1, 2, 5]) → false
// modThree([2, 4, 2, 5]) → true
function modThree(arr) {
    let result = false;
    for (let i = 0; i < arr.length - 2; i++)
        if ((arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) ||
            (!(arr[i] % 2 == 0) && !(arr[i + 1] % 2 == 0) && !(arr[i + 2] % 2 == 0))) {
            result = true;
        }
    return result;
}
console.log(modThree([2, 1, 2, 5]));

// 18.	sameEnds : Return true if the group of N numbers at the start and end of the array are the same. For example, with {5, 6, 45, 99, 13, 5, 6}, the ends are the same for n=0 and n=2, and false for n=1 and n=3. You may assume that n is in the range 0..nums.length inclusive.
// sameEnds([5, 6, 45, 99, 13, 5, 6], 1) → false
// sameEnds([5, 6, 45, 99, 13, 5, 6], 2) → true
// sameEnds([5, 6, 45, 99, 13, 5, 6], 3) → false
function sameEnds(arr, num) {
    for (let i = 0; i < num; i++) {
        if (arr[i] != arr[arr.length - num + i])
            return false;
    }
    return true;
}
console.log(sameEnds([5, 6, 45, 99, 13, 5, 6], 2));

// 19.	tripleUp : Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.
// tripleUp([1, 4, 5, 6, 2]) → true
// tripleUp([1, 2, 3]) → true
// tripleUp([1, 2, 4]) → false
function tripleUp(arr) {
    let tripleNum = false;
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] == arr[i + 1] - 1 && arr[i] == arr[i + 2] - 2) {
            tripleNum = true;
            break;
        }
    }
    return tripleNum;
}
console.log(tripleUp([1, 2, 4]));

// 20.	notAlone : We'll say that an element in an array is "alone" if there are values before and after it, and those values are different from it. Return a version of the given array where every instance of the given value which is alone is replaced by whichever value to its left or right is larger.
// notAlone([1, 2, 3], 2) → [1, 3, 3]
// notAlone([1, 2, 3, 2, 5, 2], 2) → [1, 3, 3, 5, 5, 2]
// notAlone([3, 4], 3) → [3, 4]
function notAlone(arr, num) {
    for (let k = 1; k < arr.length - 1; k++) {
        if (arr[k] == num && arr[k - 1] != arr[k] && arr[k] != arr[k + 1]) {
            arr[k] = Math.max(arr[k - 1], arr[k + 1]);
        }
    }
    return arr;
}
console.log(notAlone([1, 2, 3, 2, 5, 2], 2));
