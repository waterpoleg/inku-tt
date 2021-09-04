const array = [5, 48, 9, 22, 13, 80, 54, 11, 99, 28, 95, 37, 70, 27];

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}

console.log('Max of Array = ', findMax(array));
console.log('Min of Array = ', findMin(array));