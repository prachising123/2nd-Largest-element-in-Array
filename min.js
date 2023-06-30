const arr =[11,2,44,7,6,25,19,47,10];

    let largestNumber = Number.MIN_VALUE;
    let secondLargest = Number.MIN_VALUE;

    for(let i =0; i<arr.length; i++){
       if(largestNumber < arr[i]){
        secondLargest=largestNumber;
        largestNumber = arr[i];
       }
    }
document.write(secondLargest);