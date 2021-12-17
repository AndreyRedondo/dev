function reverseString(str: string) {
    const arrayStr = str.split('').reverse().join();
    const result = arrayStr.replace(/,/g, '');
    return result;
}

function checkPalin(srt: string){
    const normal = srt
    const reversed = normal.split('').reverse().join()
    const result = reversed.replace(/,/g, '');

    if(normal === result){
        console.log(`it is`);
    }else{
        console.log(`it is not`);
    }
}

function factor(num: number){
    let total = 1;
    for(let i = 1; i <= num; i++ ){
        total = total * i;
    }
    return total;
}

function longestWord(str: string){
    const intoArray = str.split(' ')
    let highest = 0;
    let word = '';
    for(const field of intoArray){
        if (field.length > highest){
            highest = field.length
            word = field
        }
    }
    return highest;
}

