function createObject(uno, dos){
    if(uno.length !== dos.length){
        return false
    }
    let object = {};
    for(let i = 0; i < uno.length; i++){
        let letter = uno[i];
        object[letter] ? object[letter] += 1 : object[letter] = 1;
    }
    for(let j = 0; j < dos.length; j++){
        let letter = dos[j]
        if(!object[letter]){
            return false
        }else{
            object[letter]-=1;
        }
    }
    return true
}

const result = createObject('andrssyy', 'andrssyy');
console.log(result);