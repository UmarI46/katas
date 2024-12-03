function safetyCheck(arr){
    let numberOfSafe= 0
    let isSafeArray= true
    let isIncreasing= false
    let isDecreasing= false
    let isVetted= false
    console.log("WHOLE ARRAY SIZE============", arr.length)
    for(let i= 0; i<arr.length; i++){
        if(arr[i].length===0) return "Error - 1 or more arrays are empty"
        console.log("WHOLE ARRAY INDEX", i)
        for(let j= 0; j<arr[i].length; j++){
            let current = arr[i][j]
            let next = arr[i][j+1]
            let lastIndex= arr[i].length-1
            let last= arr[i][arr[i].length-1]

            if(current< next && !isVetted) {isVetted=true, isIncreasing=true}
            else if(current> next && !isVetted){isDecreasing=true, isVetted= true}
            else if(current === next && !isVetted){isSafeArray= false, isVetted= true}

            console.log(isDecreasing)
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

    return numberOfSafe
}

module.exports= {safetyCheck}
// safeArray && (next< current+4 && current!== next) || (current=== last)