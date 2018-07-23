var arr=[2,8,5,1,6,9,3,10,4];
var length = arr.length;
quickSort(arr,0,length-1);

function quickSort(arr,low,high){
    if(low<high){
        var par=partition(arr,low,high);
        quickSort(arr,low,par-1);
        quickSort(arr,par+1,high);
    }
}

function partition(arr,low,high)
{
    var pivot = arr[high];
    var i=low-1;
    for(var j=low;j<=high-1;j++)
    {
        if(arr[j]<=pivot){
            i++;
            var t=arr[i];
            arr[i]=arr[j];
            arr[j]=t;
        }
    }
    var t=arr[i+1];
    arr[i+1]=arr[high];
    arr[high]=t;
  //  console.log(arr);
    return i+1;
}

console.log(arr);