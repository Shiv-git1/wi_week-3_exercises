// 1.	Sort an array? Bubble sort, quick sort, heap sort
function bubbleSort(arr) {
    // BUBBLE SORT
    for (let i = 0; i < arr.length; i++) {
        // Last i elements are already in place  
        for (let j = 0; j < (arr.length - i - 1); j++) {
            // Checking if the item at present iteration is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
                // If the condition is true then swap them
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Print the sorted array
    return `Bubble sort : ${arr}`;
}
console.log(bubbleSort([234, 43, 55, 63, 5, 6, 235, 547]));

// QUICK SORT   
function partition(arr, start, end) {
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
        }
    }

    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex;
};
function quickSort(arr) {
    // Creating an array that we'll use as a stack, using the push() and pop() functions
    let stack = [];
    // Adding the entire initial array as an "unsorted subarray"
    stack.push(0);
    stack.push(arr.length - 1);
    // There isn't an explicit peek() function
    // The loop repeats as long as we have unsorted subarrays
    while (stack[stack.length - 1] >= 0) {
        // Extracting the top unsorted subarray
        end = stack.pop();
        start = stack.pop();
        pivotIndex = partition(arr, start, end);
        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex - 1 > start) {
            stack.push(start);
            stack.push(pivotIndex - 1);
        }
        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex + 1 < end) {
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
    return `Quick Sort : ${arr}`;
}
console.log(quickSort([7, -2, 4, 1, 6, 5, 0, -4, 2]));

// HEAP SORT
const heapsort = arr => {
    const a = [...arr];
    let l = a.length;

    const heapify = (a, i) => {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let max = i;
        if (left < l && a[left] > a[max]) max = left;
        if (right < l && a[right] > a[max]) max = right;
        if (max !== i) {
            [a[max], a[i]] = [a[i], a[max]];
            heapify(a, max);
        }
    };
    for (let i = Math.floor(l / 2); i >= 0; i -= 1) heapify(a, i);
    for (i = a.length - 1; i > 0; i--) {
        [a[0], a[i]] = [a[i], a[0]];
        l--;
        heapify(a, 0);
    }
    return `Heap Sort : ${a}`;
};
console.log(heapsort([6, 3, 4, 1]));

// 2.Find total prime number, even number, odd number, armstrong number present in the array?
function checkPriEveOddArm(arr) {
    let primeNum = [], evenNum = [], oddNum = [], armstrongNum = [];
    let i, sum = 0;
    for (i = 0; i < arr.length; i++) {
        // if(arr[i]) == 2) primeNum.push(arr[i])
        let numToString = String(arr[i]);
        let sumOfCube;
        for (let j = 0; j < numToString.length; j++) {
            sumOfCube = sum + (parseInt(numToString[j])) ** 3;
            // console.log(numToString);
        }
        console.log('here', sumOfCube);
        if (arr[i] == sumOfCube) armstrongNum.push(arr[i]);
        if (arr[i] % 2 === 0) evenNum.push(arr[i]);
        else oddNum.push(arr[i]);
    }
    return `Even num : ${evenNum}, Odd num : ${oddNum}, Prime num : ${primeNum}, Armstrong num : ${armstrongNum}`;
}
// return `Even num : ${evenNum}, Odd num : ${oddNum}, Prime num : ${primeNum}`;
console.log(checkPriEveOddArm([234, 43, 55, 63, 5, 6, 235, 547, 371]));

// 3. Find the highest frequency number in an array?
function highFrequency(arr) {
    // Sort the array
    arr.sort();
    // find the max frequency using line traversal
    let max_count = 1, res = arr[0];
    let curr_count = 1;
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i] == arr[i - 1])
            curr_count++;
        else {
            if (curr_count > max_count) {
                max_count = curr_count;
                res = arr[i - 1];
            }
            curr_count = 1;
        }
    }
    // If last element is most frequent
    if (curr_count > max_count) {
        max_count = curr_count;
        res = arr[n - 1];
    }
    return res;
}
console.log(highFrequency([1, 5, 2, 1, 3, 2, 1, 2, 2]));

// 4. Swap every alternate index value in an array?  5 7 3 1 7 should become 7 5 1 3 7
function swapNum(arr) {
    let n = arr.length;
    let lastNum;
    if (n % 2 != 0) {
        lastNum = arr.pop();
    }
    for (let i = 0; i < arr.length; i += 2) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    arr.push(lastNum);
    return arr;
}
console.log(swapNum([5, 7, 3, 1, 7]));

// 5. Reverse the array? Don’t print the array in reverse Order. Don’t use 2nd array
function reverseArr(arr) {
    let temp;
    let start = 0, end = arr.length - 1;  //[5, 7, 3, 1, 7]
    while (start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
console.log(reverseArr([1, 2, 3, 4, 5, 6]));

// 6. Arrange the array with all even number first,then odd number in Ascending order
//    Ex 5 1 6 3 2  should become 2 6 1 3 5 
function sortEvenOdd(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++)
        if (arr[i] % 2 == 0) // Check for even
            arr[i] *= -1;
    // Sort all numbers
    arr.sort((a, b) => a - b);
    // Retaining original array
    for (let i = 0; i < n; i++)
        if (arr[i] % 2 == 0)
            arr[i] *= -1;
    return arr;
}
console.log(sortEvenOdd([5, 1, 3, 4, 2]));

// 7. Find intersection of 2 Array?
function intersectTwoArr(a, b) {
    let n = a.length;
    let m = b.length;
    let i = 0, j = 0, outputArr = [];
    while (i < n && j < m) {
        if (a[i] > b[j]) {
            j++;
        }
        else if (b[j] > a[i]) {
            i++;
        }
        else {
            // when both are equal
            outputArr.push(a[i]);
            i++;
            j++;
        }
    }
    return outputArr;
}

let a = [1, 3, 2, 3, 4, 5, 5, 6];
let b = [3, 3, 5];
a.sort();
b.sort();
console.log(intersectTwoArr(a, b));

// 8. Find which element is present in first array but not in 2nd array
function findMissing(a, b) {
    let n = a.length;
    let m = b.length;
    let outputArr = [];
    for (let i = 0; i < n; i++) {
        let j;
        for (j = 0; j < m; j++) {
            if (a[i] == b[j]) break;
        }
        if (j == m) outputArr.push(a[i]);
    }
    return outputArr;
}

a = [1, 2, 6, 3, 4, 5];
b = [2, 4, 3, 1, 0];
console.log(findMissing(a, b));

// 9. Find a missing number in array of 100 numbers
function missingNum(arr) {
    let n = arr.length;
    let sumOfNum = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++) {
        sumOfNum -= arr[i];
    }
    return sumOfNum;
}
console.log(missingNum([1, 2, 3, 5, 6]));

// 10. Remove duplicates from an array of Integers, without using API methods in Java?
function removeDuplicate(arr, n) {
    n = arr.length;
    if (n == 0 || n == 1) return n;
    // To store index of next unique element
    let j = 0;
    for (i = 0; i < n - 1; i++) {
        if (arr[i] != arr[i + 1]) {
            arr[j++] = arr[i];
        }
    }
    arr[j++] = arr[n - 1];
    return j;
}
let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
let n = arr.length;
n = removeDuplicate(arr, n);
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}
