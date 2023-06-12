function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return the index if the target element is found
      }
    }
    return -1; // Return -1 if the target element is not found
  }
  
  // Example usage
  const array = [5, 2, 8, 4, 9, 1];
  const targetElement = 8;
  const foundIndex = linearSearch(array, targetElement);
  console.log(foundIndex); // Output: 2 (index of the target element in the array)
  