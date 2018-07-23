let input = 11;
let padding = 2;
let output;
function paddedNumber(input,padding){
    var str=input.toString();
    var length=str.length;
    padding=padding-length;
    if(length==padding){
        return str;
    }
    else{
        while(padding>0){
            str='0'+str;
            padding--;
        }
    }
    return str;
}

let result =paddedNumber(input,padding);
console.log(result);