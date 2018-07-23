var arr=[9,4,7,2,6,1,3,0];
var length=arr.length;
// console.log(length);
function bubbleSort(arr,n){
    var swaped =1;
    for(var i=n;i>0 && swaped;i--){
        swaped=0;
        for(var j=0;j<i;j++){
            if(arr[j]>arr[j+1])
            {
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                swaped=1;
            }
        }
    }
}

bubbleSort(arr,length);
console.log(arr);