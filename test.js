function flatten(arr){
    
    
    let nArr = [];
    if(arr.length===0) return nArr;
    if(typeof arr[0] === 'object' && arr[0].length ===0){
        arr.shift();
    }else if(typeof arr[0] === 'object'){
        arr.push(arr[0][0]);
        arr[0].shift();
    }else {
        nArr.push(arr[0]);
        arr.shift();
    }
    nArr = nArr.concat(flatten(arr));
    return nArr;
  // add whatever parameters you deem necessary - good luck!
}

// console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3


// function collectOddValues(arr){
//     let newArr = [];
    
//     if(arr.length === 0) {
//         return newArr;
//     }
        
//     if(arr[0] % 2 !== 0){
//         newArr.push(arr[0]);
//     }
        
//     newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr;
// }

// console.log(collectOddValues([1,2,3,4,5]));