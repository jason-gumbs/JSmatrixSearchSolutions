let matrixArray = [
  [0,0,1,0,0],
  [0,0,1,1,1],
  [0,1,0,0,0],
  [0,0,0,0,0],
]

let results = new Map()
let answer =  []
let data = 0


let findLease = (arr) =>{
for (let i = 0; i < arr.length; i++){
  // console.log(matrixArray[i])
  let nestedArray = arr[i]
  for (let j = 0; j < nestedArray.length; j++){
    if(nestedArray[j] === 1){
        results.set(i,j)
 
    }

  }
}
// console.log(results)

 results.forEach((value,key,map) =>{ 
  //  console.log(key)
     if(value < map.get(key + 1 )){
       data =  value
       }    
    })
        return data

}

let findings = findLease(matrixArray)
console.log(findings)
