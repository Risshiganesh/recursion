function fibs (num){

    const fibArray = [0,1]

    for (let index = 0; index < num-2; index++) {
        const newFib = fibArray[index]+ fibArray[index+1]
        
        fibArray.push(newFib);

    }

    return fibArray;

}

// console.log(fibs(8))

// function fibsRec (num, fibArray = [0,1]){

//     // const fibArray = [0,1];

//     if (num === 2) {
//         return fibArray
//     }


//     const newFib = fibArray[fibArray.length-2] + fibArray[fibArray.length-1]

//     fibArray.push(newFib);

// //    console.log(fibArray)
//    return fibsRec(num-1, fibArray);
    
// }
console.log('FibsRec')
console.log(fibsRec(77))


function fibsRec (num, fibArray = [0,1]){

    if (fibArray.length === num) {
        return fibArray
    }

    if (num <= 1) {
        return [0]
    }

    const newFib = fibArray[fibArray.length-2] + fibArray[fibArray.length-1];

    fibArray.push(newFib);

   return fibsRec(num, fibArray);
    
}


// console.log(mergeSort([7,2,5,4,1,6,0,3,9,8,8,1]))

console.log(mergeSort([3, -1, 4, 1, -5, 9, 2, -6, 5, 3, -5]))


// console.log(mergeSort([9,8,7,6,5,4,3,2,1]))




function mergeSort(array){

    if (array.length === 0) {
        return console.log("Array is empty")
    }

    

    function split(arr){
  
      if(arr.length === 1){
  
        return arr;
        }
      const splitLeft = arr.slice(0, arr.length/2);
  
      const splitRight = arr.slice(arr.length/2, arr.length);
  
      return sort(split(splitLeft), split(splitRight));
    }
  

  
    function sort(left, right, newArray = []){


        console.log(left, right, newArray)

        if(left.length === 0 ){

          console.log("^^^^^^^^^^^^^^^^^^^^^^^^")

          console.log("CONCAT ALL RIGHT ARRAY ELEMENTS")

          return newArray.concat(right);
  
        }

        if(right.length === 0 ){

          console.log("^^^^^^^^^^^^^^^^^^^^^^^^")

          console.log("CONCAT ALL LEFT ARRAY ELEMENTS")
          
          return newArray.concat(left);

        }

        if(left[0] < right[0]){
        
            newArray.push(left[0]);

            return sort(left.slice(1), right, newArray);

            }else{

            newArray.push(right[0]);

            return sort(left, right.slice(1), newArray);
    
          
        }



    }    
  
    return split(array);
    
    
    
  }