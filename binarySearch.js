// Binary Search: It is an efficient search algorithm that works on sorted arrays or lists. It follows a divide-and-conquer approach by repeatedly dividing the search space in half. It compares the target element with the middle element and eliminates the half that cannot contain the target element. Binary search has a time complexity of O(log n), which is much faster than linear search.


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Return the index if the target element is found
      } else if (arr[mid] < target) {
        left = mid + 1; // Continue searching in the right half
      } else {
        right = mid - 1; // Continue searching in the left half
      }
    }
  
    return -1; // Return -1 if the target element is not found
  }
  
  // Example usage
  const array = [1, 2, 4, 5, 7, 8, 9];
  const targetElement = 7;
  const foundIndex = binarySearch(array, targetElement);
  console.log(foundIndex); // Output: 4 (index of the target element in the sorted array)
  