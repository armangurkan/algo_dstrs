function selSort(arr){
    
    for(let start =0; start<arr.length-1; start++){
        
        let min = start;
        for (let ind=start; ind<arr.length-1; ind++){
            //console.log(arr, arr[start], arr[min]);
            if(arr[ind]>arr[ind+1]){
                if(arr[min]>=arr[ind+1]){
                    min=ind+1;
                    
                }
            }

        }
        
        [arr[start], arr[min]] = [arr[min], arr[start]];
        
        //console.log('round of big loop');
    }
    return arr;
    
}


console.log(selSort([99,12, 77, 98, 4,2,3,84,23,33,48,84,3838,93923848,23,23,23,23,23,23,23]));