const fs= require("fs")

function smallestToLargest(array){
    let i= 0
    while(i<array.length){
        for(let j=0; j<array.length-1; j++){
            if(array[j]>array[j+1]){
                let bigger= array[j]
                let smaller= array[j+1]
                array[j]= smaller
                array[j+1]= bigger
            }
        }
        i++
    }
    return array
}

function findDistance(arr1, arr2){
    if(arr1.length===0 || arr2.length===0) return "Error - 1 or more arrays are empty"
    let sum= 0

    arr1= smallestToLargest(arr1)
    arr2= smallestToLargest(arr2)
    
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] - arr2[i]<0){
            sum+= arr2[i] - arr1[i]
        }
        else{
            sum+= arr1[i] - arr2[i]
        }
    }

    //console.log(sum)
    return sum
}

function findSimilarities(arr1, arr2){
    if(arr1.length===0 || arr2.length===0) return "Error - 1 or more arrays are empty"
    let similarityScore= 0
    let duplicates= 0

    for(let i= 0; i<arr1.length; i++){
        for(let j= 0; j<arr2.length; j++){
            if(arr1[i]===arr2[j]){
                duplicates++
            }
        }
        if(duplicates>0) similarityScore+= arr1[i] * duplicates
        duplicates= 0
    }

    //console.log(similarityScore)
    return similarityScore
}

function txtToArrays(path){
    const arr1= []
    const arr2= []
    const textPath= `${__dirname}/${path}`

    const data= fs.readFileSync(`${textPath}`, 'utf-8')
    splitData= data.toString().match(/[0-9]+/g)

    for(let i=0; i<splitData.length; i++){
        if(i%2===0) {arr1.push(Number(splitData[i]))}
        else {arr2.push(Number(splitData[i]))}
    }

    return findSimilarities(arr1, arr2)
}
txtToArrays("text/01-actualData.txt")

module.exports= {smallestToLargest, findDistance, txtToArrays, findSimilarities}