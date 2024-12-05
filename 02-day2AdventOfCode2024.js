const fs= require("fs")

function safetyCheck(arr){
    let numberOfSafe= 0
    let isSafeArray= true
    let isIncreasing= false
    let isDecreasing= false
    let isVetted= false
    for(let i= 0; i<arr.length; i++){
        if(arr[i].length===0) return "Error - 1 or more arrays are empty"
        for(let j= 0; j<arr[i].length; j++){
            let current = arr[i][j]
            let next = arr[i][j+1]
            let lastIndex= arr[i].length-1
            let last= arr[i][arr[i].length-1]

            if(current< next && !isVetted) {isVetted=true, isIncreasing=true}
            else if(current> next && !isVetted){isDecreasing=true, isVetted= true}
            else if(current === next && !isVetted){isSafeArray= false, isVetted= true}

            if(isSafeArray && isIncreasing && (next< current+4 && next> current) || (current=== last && j===lastIndex && isIncreasing)){
            } 
            else if(isSafeArray && isDecreasing && (next> current-4 && next< current) || (current=== last && j===lastIndex && isDecreasing)){
            } 
            else{isSafeArray= false}
        }
        if(isSafeArray) numberOfSafe++
        isSafeArray= true
        isVetted= false
        isIncreasing= false
        isDecreasing= false
    }

    console.log(numberOfSafe)
    return numberOfSafe
}

function txtToNestedArray(path){
    const arr= []
    const textPath= `${__dirname}/${path}`

    const data= fs.readFileSync(`${textPath}`, "utf-8")
    splitData= data.toString().match(/[^ \n ]+/g)
    let temp= []

    splitData.forEach(element => {
        if(element.includes("\r")) {
            temp.push(Number(element))
            arr.push(temp)
            temp= []

        } else{
            temp.push(Number(element))
        }
    });

    return safetyCheck(arr)
}

txtToNestedArray("text/02-actualData.txt")

module.exports= {safetyCheck, txtToNestedArray}