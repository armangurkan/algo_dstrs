function bubSort(arr){
    let temp = 0;
    let noSwaps;
    for(let i =arr.length; i>0; i--){
        noSwaps = true;
        for(let j =0; j<i-1; j++){
                
            if(arr[j]>arr[j+1]){
                console.log(arr, arr[j], arr[j+1]);
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwaps = false;
            }
        }
        if(noSwaps) break;
        console.log('first big loop');
    }
    return arr;
}


console.log(bubSort([99,12, 77, 99, 4,2,3,84,23,33]));