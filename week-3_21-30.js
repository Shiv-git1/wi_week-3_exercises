// 21.	zeroMax: Return a version of the given array where each zero value in the array is replaced by the largest odd value to the right of the zero in the array. 
// If there is no odd value to the right of the zero, leave the zero as a zero.
// zeroMax([0, 5, 0, 3]) → [5, 5, 3, 3]
// zeroMax([0, 4, 0, 3]) → [3, 4, 3, 3]
// zeroMax([0, 1, 0]) → [1, 1, 0]
function zeroMax(arr) {
    let max = 0;
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] == 0) {
            for (let i = j + 1; i <= arr.length - 1; i++) {
                if (arr[i] > max && arr[i] % 2 == 1) {
                    max = arr[i];
                }
            }
            arr[j] = max;
            max = 0;
        }
    }
    return arr;
}
console.log(zeroMax([0, 5, 0, 3]));

// 22.	evenOdd : Return an array that contains the exact same numbers as the given array, but rearranged so that all the even numbers come before all the odd numbers. Other than that, the numbers can be in any order. You may modify and return the given array, or make a new array.
// evenOdd([1, 0, 1, 0, 0, 1, 1]) → [0, 0, 0, 1, 1, 1, 1]
// evenOdd([3, 3, 2]) → [2, 3, 3]
// evenOdd([2, 2, 2]) → [2, 2, 2]
const isEven = num => num % 2 === 0;
const sorter = ((a, b) => {
    if (isEven(a) && !isEven(b)) {
        return -1;
    };
    if (!isEven(a) && isEven(b)) {
        return 1;
    };
    return a - b;
});
const evenOdd = arr => {
    return arr.sort(sorter);
};
console.log(evenOdd([3, 3, 2]));

// 23.	fizzBuzz : Consider the series of numbers beginning at start and running up to but not including end, so for example start=1 and end=5 gives the series 1, 2, 3, 4. Return a new String[] array containing the string form of these numbers, except for multiples of 3, use "Fizz" instead of the number, 
// for multiples of 5 use "Buzz", and for multiples of both 3 and 5 use "FizzBuzz". 
// In Java, String.valueOf(xxx) will make the String form of an int or other type. 
// This version is a little more complicated than the usual version since you have to allocate and index into an array instead of just printing, and we vary the start/end instead of just always doing 1..100.
// fizzBuzz(1, 6) → ["1", "2", "Fizz", "4", "Buzz"]
// fizzBuzz(1, 8) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7"]
// fizzBuzz(1, 11) → ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]
function fizzBuzz(start, end) {
    let outputArr = [];
    for (let i = start; i < end; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            outputArr.push("FizzBuzz");
        } else if (i % 3 == 0) {
            outputArr.push("Fizz");
        } else if (i % 5 == 0) {
            outputArr.push("Buzz");
        } else {
            outputArr.push(String(i));
        }
    }
    return outputArr;
}
console.log(fizzBuzz(1, 16));

// 24.	maxSpan : Consider the leftmost and righmost appearances of some value in an array. We'll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. 
// maxSpan([1, 2, 1, 1, 3]) → 4
// maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
// maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6
function maxSpan(arr) {
    let maxSpan = 0;
    let tempSpan = 0;
    if (arr.length == 0) {
        return 0;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[i] == arr[j]) {
                tempSpan = j - i;
                break;
            }
        }
        if (tempSpan > maxSpan) {
            maxSpan = tempSpan;
        }
    }
    return maxSpan + 1;
}
console.log(maxSpan([1, 4, 2, 1, 4, 1, 4]));

// 25.	fix34 : Return an array that contains exactly the same numbers as the given array, but rearranged so that every 3 is immediately followed by a 4. Do not move the 3's, but every other number may move. The array contains the same number of 3's and 4's, every 3 has a number after it that is not a 3, and a 3 appears in the array before any 4.
// fix34([1, 3, 1, 4]) → [1, 3, 4, 1]
// fix34([1, 3, 1, 4, 4, 3, 1]) → [1, 3, 4, 1, 1, 3, 4]
// fix34([3, 2, 2, 4]) → [3, 4, 2, 2]
function fix34(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 3) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] == 4 && arr[j - 1] != 3) {
                    let tmp = arr[i + 1];
                    arr[i + 1] = 4;
                    arr[j] = tmp;
                }
            }
        }
    }
    return arr;
}
console.log(fix34([1, 3, 1, 4, 4, 3, 1]));

// 26.	linearIn : Given two arrays of ints sorted in increasing order, outer and inner, return true if all of the numbers in inner appear in outer. The best solution makes only a single "linear" pass of both arrays, taking advantage of the fact that both arrays are already in sorted order.
// linearIn([1, 2, 4, 6], [2, 4]) → true
// linearIn([1, 2, 4, 6], [2, 3, 4]) → false
// linearIn([1, 2, 4, 4, 6], [2, 4]) → true
function linearIn(outer, inner) {
    let numFound = 0;
    if (inner.length == 0) {
        return true;
    }
    let k = 0;
    for (let i = 0; i < outer.length; i++) {
        if (outer[i] == inner[k]) {
            numFound++;
            k++;
        } else if (outer[i] > inner[k]) {
            return false;
        }
        if (numFound == inner.length)
            return true;
    }
    return false;
}
console.log(linearIn([1, 2, 4, 6], [2, 3, 4]));

// 27.	squareUp : Given n>=0, create an array length n*n with the following pattern, shown here for n=3 : {0, 0, 1,    0, 2, 1,    3, 2, 1} (spaces added to show the 3 groups).
// squareUp(3) → [0, 0, 1, 0, 2, 1, 3, 2, 1]
// squareUp(2) → [0, 1, 2, 1]
// squareUp(4) → [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
function squareUp(n) {
    let result = new Array(n * n);
    let numberToInsert = 1;
    for (let column = n - 1; column >= 0; column--) {
        for (let row = n - 1; row >= n - 1 - column; row--) {
            result[(row * n) + column] = numberToInsert;
        }
        numberToInsert++;
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i] == null) {
            result[i] = 0;
        }
    }
    return result;
}
console.log(squareUp(3));

// 28.	seriesUp: Given n>=0, create an array with the pattern {1,    1, 2,    1, 2, 3,   ... 1, 2, 3 .. n} (spaces added to show the grouping). Note that the length of the array will be 1 + 2 + 3 ... + n, which is known to sum to exactly n*(n + 1)/2.
// seriesUp(3) → [1, 1, 2, 1, 2, 3]
// seriesUp(4) → [1, 1, 2, 1, 2, 3, 1, 2, 3, 4]
// seriesUp(2) → [1, 1, 2]
function seriesUp(n) {
    let resultArr = new Array([n * (n + 1) / 2]);
    let i = 0;
    for (let j = 1; j <= n; ++j) {
        for (let k = 1; k <= j; ++k) {
            resultArr[i++] = k;
        }
    }
    return resultArr;
}
console.log(seriesUp(3));

// 29.	maxMirror:  We'll say that a "mirror" section in an array is a group of contiguous elements such that somewhere in the array, the same group appears in reverse order. For example, the largest mirror section in {1, 2, 3, 8, 9, 3, 2, 1} is length 3 (the {1, 2, 3} part). Return the size of the largest mirror section found in the given array.
// maxMirror([1, 2, 3, 8, 9, 3, 2, 1]) → 3
// maxMirror([1, 2, 1, 4]) → 3
// maxMirror([7, 1, 2, 9, 7, 2, 1]) → 2
function maxMirror(arr) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        for (let j = arr.length - 1; i + count < arr.length && j > -1; j--) {
            if (arr[i + count] == arr[j]) {
                count++;
            }
            else {
                if (count > 0) {
                    max = Math.max(count, max);
                    count = 0;
                }
            }
        }
        max = Math.max(count, max);
    }
    return max;
}
console.log(maxMirror([7, 1, 2, 9, 7, 2, 1]));

// 30.	countClumps: Say that a "clump" in an array is a series of 2 or more adjacent elements of the same value. Return the number of clumps in the given array.
// countClumps([1, 2, 2, 3, 4, 4]) → 2
// countClumps([1, 1, 2, 1, 1]) → 2
// countClumps([1, 1, 1, 1, 1]) → 1
function countClumps(arr) {
    let match = false;
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] == arr[i + 1] && !match) {
            match = true;
            count++;
        }
        else if (arr[i] != arr[i + 1]) {
            match = false;
        }
    }
    return count
}
console.log(countClumps([1, 1, 1, 1, 1]));
