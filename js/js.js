function test1(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0){
            result = result + "-"
        }else{
            result = result + "+"
        }
    }
    return result
}

console.log(test1(5));