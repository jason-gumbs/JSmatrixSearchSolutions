// Find the leftes number 1 in the matrix.

let matrixArray = [
  [0,0,1,0,0],
  [0,0,1,1,1],
  [0,1,0,0,0],
  [0,0,0,0,0],
]

let results = new Map()
let answer =  []
let data = null


let findLease = (arr) =>{
for (let i = 0; i < arr.length; i++){
  let nestedArray = arr[i]
  for (let j = 0; j < nestedArray.length; j++){
    if(nestedArray[j] === 1){
        results.set(i,j) 
    }
  }
}

 results.forEach((value,key,map) =>{ 
     if(value < map.get(key + 1 )){
       data =  value
       }    
    })
        return data
}

let findings = findLease(matrixArray)
console.log(findings)
