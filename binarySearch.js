var arr = [1,2,4,6,7,9,11,13];
var length=arr.length;
var x=11;
var position = binarySearch(arr,0,length-1,x);

function binarySearch(a,l,n,x)
{
    if(n>=l)
    {
        var middle=l+((n-1)/2);
        if(x == a[middle])
        {
            return middle+1;
        }
        else if(x<a[middle]){
            return binarySearch(a,0,middle-1,x);
        }
        else{
            return binarySearch(a,middle+1,n,x);
        } 
    
    }
    return "Not found";
}

console.log(position);