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
// console.log('FibsRec')
// console.log(fibsRec(8))


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

// console.log(fibsRec(3));


// function mergeSort (arr, finalArr = []){

 

//     if(arr.length === 1){

//         const newArr = []
        
//         if (leftArr< rightArr) {
//             newArr.push(leftArr);
//             newArr.push(rightArr);
//         }else{
//             newArr.push(rightArr);
//             newArr.push(leftArr);
//         }

       
//         return newArr

//     }

//     // console.log("Left Array")
//     // console.log(leftArr)
//     // console.log("Right Array")
//     // console.log(rightArr)


//     function split(arr){

//         if (arr.length === 1) {
//             return arr
//         }

//         const leftArr = arr.slice(0,(arr.length/2));

//         const rightArr = arr.slice(arr.length/2);


//         // console.log(leftArr)

//         return sort(split(leftArr), split(rightArr))
//     }


//     function sort(leftArr, rightArr){

//         console.log('##########################')
//         console.log("Left")
//         console.log(leftArr);
//         console.log("Right")
//         console.log(rightArr)

//         const sortArr = [];
//         console.log("COMPARE");

//         console.log(leftArr < rightArr)

//         if (leftArr < rightArr) {
//             sortArr.push(leftArr)
//             sortArr.push(rightArr);
//         }else{
//             sortArr.push(rightArr);
//             sortArr.push(leftArr)
//         }

//         console.log("SORT")

//         console.log(sortArr)
//         const flatten = sortArr.flat(Infinity);
//         console.log(flatten)


//         // Experiment

//         // if (Array.isArray(leftArr)) {
//         //     return
//         // }


//         return sortArr;
//     }

//     const newArr = split(arr);


//     console.log("FINAL")
//     // console.log(newArr)
//     // return newArr.flat(Infinity)
//     return `${newArr}`;


// }

console.log(mergeSort([7,2,5,4,1,6,0,3,9,8,8,1]))

// console.log(mergeSort([7,2]))


// console.log(mergeSort([9,8,7,6,5,4,3,2,1]))




function mergeSort(array){

    function split(arr){
  
      if(arr.length === 1){
  
        return arr;
        // return arr[0];
        }
      const splitLeft = arr.slice(0, arr.length/2);
  
      const splitRight = arr.slice(arr.length/2, arr.length);
  
    //   console.log(splitLeft, splitRight)
  
      return sort(split(splitLeft), split(splitRight));;
    }
  

  
    function sort(left, right, newArray = []){


        console.log(left, right, newArray)

  
        // if(left.length === 0 && right.length === 0){
        //   // console.log(newArray)
        //   console.log("FINAL")
        //   return newArray.flat(Infinity);
        // }

        if(left.length === 0 ){

          console.log("PUSH RIGHT")

          newArray.push(right);
          return newArray.flat(Infinity)
        }

        if(right.length === 0 ){

          console.log("PUSH LEFT")
          
          newArray.push(left);

          return newArray.flat(Infinity)
        }
        //const newArray = [];

          if(left[0] < right[0]){
            
  
          newArray.push(left[0]);
          // newArray.push(right[0])
  
          return sort(left.slice(1), right, newArray);
          }else{
          newArray.push(right[0]);
          // newArray.push(left[0])
  
          return sort(left, right.slice(1), newArray);
      
  
          
          }



    }
  
    
  
    return split(array);
    
    
    
  }