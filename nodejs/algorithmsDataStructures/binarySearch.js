function bSearch(array, val){
    let min =0;
    let max = array.length;

    while (min <= max){
        let middle = Math.floor((min + max ) / 2);
        //let currentElement = array[middle];

        if(array[middle] < val){
            min = middle + 1;
        }
        else if(array[middle] > val){
            max = middle -1;
        }
        else{
            return middle
        }
    }
    return -1;
}

const result = bSearch([1,2,3,6,8,9,55,66,199,10000], 55)
console.log(result);