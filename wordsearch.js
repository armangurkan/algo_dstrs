function wordSearch(str, val){
    let count = 0;
    let ind = []
    for(let start = 0; start<=str.length-val.length; start++){
        // console.log(start + 'hollo');
        let count2 = 0;
        let i;
        for(i=0; i<val.length; i++){
            if(val[i]===str[start+i]){
                // console.log(val[i]);
                // console.log(str[start+i]);

                count2++;
                // console.log(count2);
            }
        }
        if(count2 ===val.length){
            count++;
            count2=0;
            ind.push(start);
        }
    }
    return ind;
}


console.log(wordSearch('bokadlfjsaldf lsdfbokbokbokbokbokbokbok', 'bok'));