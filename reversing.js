const reversing = (num)=>{
    let str = num.toString();

    let reversedStr = '';
    for (let i = str.length -1; i >=0; i--){
        reversedStr += str[i];
    }

    return parseInt(reversedStr);
}

console.log(reversing(12345))