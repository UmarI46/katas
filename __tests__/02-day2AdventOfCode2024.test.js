const {safetyCheck, txtToNestedArray}= require("../02-day2AdventOfCode2024")

describe("safetyCheck()", ()=>{
    test("if given an empty nested array then return an error message", ()=>{
        const actualOutput= safetyCheck([[]])
        const expectedOutput= "Error - 1 or more arrays are empty"
        expect(actualOutput).toBe(expectedOutput)
    })
    test("adds to number of safe for every instance that an array is INCREASING its numbers by 1-3 (ONE ARRAY)", ()=>{
        const actualOutput= safetyCheck([[1,3,6,7,9]])
        const expectedOutput= 1
        expect(actualOutput).toBe(expectedOutput)
    })
    test("adds to number of safe for every instance that an array is INCREASING its numbers by 1-3 (MULTIPLE ARRAYS)", ()=>{
        const actualOutput= safetyCheck([[1,3,6,7,9], [1,3,6,7,9,11]])
        const expectedOutput= 2
        expect(actualOutput).toBe(expectedOutput)
    })
    test("does not add to the numberOfSafe if the numbers increase by 4 or larger (INCREASING)", ()=>{
        const actualOutput= safetyCheck([[1,3,6,7,9], [1,3,6,11], [1,3,6,7,9,11]])
        const expectedOutput= 2
        expect(actualOutput).toBe(expectedOutput)
    })
    test("does not add to the numberOfSafe if there are 2 same numbers (INCREASING)", ()=>{
        const actualOutput= safetyCheck([[1,3,6,7,7], [1,2,3,4], [1,3,6,11], [1,3,6,7,9,11], [1,3,6,7,5]])
        const expectedOutput= 2
        expect(actualOutput).toBe(expectedOutput)
    })
    test("adds to number of safe for every instance that an array is DECREASING its numbers by 1-3 (ONE ARRAY)", ()=>{
        const actualOutput= safetyCheck([[4,3,2,1]])
        const expectedOutput= 1
        expect(actualOutput).toBe(expectedOutput)
    })
    test("adds to number of safe for every instance that an array is DECREASING its numbers by 1-3 (MULTIPLE ARRAYS)", ()=>{
        const actualOutput= safetyCheck([[4,3,2,1], [11,9,8,6,3]])
        const expectedOutput= 2
        expect(actualOutput).toBe(expectedOutput)
    })
    test("does not add to the numberOfSafe if the numbers decreases by 4 or larger (DECREASE)", ()=>{
        const actualOutput= safetyCheck([[4,3,2,1],[13,11,8,3], [11,9,8,6,3]])
        const expectedOutput= 2
        expect(actualOutput).toBe(expectedOutput)
    })
    test("does not add to the numberOfSafe if there are 2 same numbers (DECREASE)", ()=>{
        const actualOutput= safetyCheck([[4,3,2,1],[13,11,8,3],[13,11,8,6,6], [11,9,8,6,3]])
        const expectedOutput= 2
        expect(actualOutput).toBe(expectedOutput)
    })
})

xdescribe("txtToNestedArray", ()=>{
    test("returns a nested array from a text file", ()=>{
        const actualOutput= txtToNestedArray("text/02-testData.txt")
        const expectedOutput= [[58,59,62,63,64,63], [71,72,74,76,78,80,82,82], [26,29,32,34,35,39], [9,11,14,17,19,20,21,26]]
        expect(actualOutput).toBe(expectedOutput)
    })
})