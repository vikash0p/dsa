const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetValue =7;

function recursicveBinarySearch(arr,target,leftIndex=0, rightIndex=sortedArray.length -1){
    console.log(`this is my sorted array ${arr}`)
    console.log("left index :  "+leftIndex)
    console.log('right index :   '+rightIndex)
    if(leftIndex > rightIndex){
        return -1
    }   
    let middleIndex=Math.floor((leftIndex + rightIndex)/2)
    console.log("midle index :     "+middleIndex)
    console.log("middle value  :     "+arr[middleIndex])

   if(target===arr[middleIndex])
   {
    return middleIndex
   }
   else if(target < arr[middleIndex]){
    return recursicveBinarySearch( arr, target , leftIndex , middleIndex - 1)
   }
   else{
    return recursicveBinarySearch(arr,target, middleIndex +1, rightIndex )
   }
}
const result=  recursicveBinarySearch(sortedArray ,targetValue)
if (result !== -1) {
    console.log(`Found ${targetValue} at index ${result}.`);
  } else {
    console.log(`${targetValue} not found in the array.`);
  }