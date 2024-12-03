const {smallestToLargest, findDistance, txtToArrays, findSimilarities}= require('../01-day1AdventOfCode2024')

describe("Sort an array from smallest to largest",()=>{
    test("when given an empty array return an empty array",()=>{
        const actualOutput= smallestToLargest([])
        const expectedOutput= []
        expect(actualOutput).toEqual(expectedOutput)
    })
    test("when given an array with 1 element return the array",()=>{
        const actualOutput= smallestToLargest([6])
        const expectedOutput= [6]
        expect(actualOutput).toEqual(expectedOutput)
    })
    test("when given an array in order it stays in order",()=>{
        const actualOutput= smallestToLargest([3,4,6])
        const expectedOutput= [3,4,6]
        expect(actualOutput).toEqual(expectedOutput)
    })
    test("when given an out of order array it shifts the elements to be in order",()=>{
        const actualOutput= smallestToLargest([6,3,9,2,0])
        const expectedOutput= [0,2,3,6,9]
        expect(actualOutput).toEqual(expectedOutput)
    })
})

describe("find the total distances between the same index in 2 different arrays", ()=>{
    test("if any arrays are empty return an error message", ()=>{
        const actualOutput= findDistance([],[])
        const actualOutput2= findDistance([3],[])
        const actualOutput3= findDistance([],[3])
        const expectedOutput= "Error - 1 or more arrays are empty"
        expect(actualOutput).toBe(expectedOutput)
        expect(actualOutput2).toBe(expectedOutput)
        expect(actualOutput3).toBe(expectedOutput)
    })
    test("when given a SORTED array return the total distances between the same index in 2 different arrays (ONE ELEMENT, NO POSSIBILITY OF NEGATIVES)", ()=>{
        const actualOutput= findDistance([4],[3])
        const expectedOutput= 1
        expect(actualOutput).toBe(expectedOutput)
    })
    test("when given a SORTED array return the total distances between the same index in 2 different arrays (MULTIPLE ELEMENTS, NO POSSIBILITY OF NEGATIVES)", ()=>{
        const actualOutput= findDistance([4,6,9],[3,4,5])
        const expectedOutput= 7
        expect(actualOutput).toBe(expectedOutput)
    })
    test("If in array1 the number is less than the number in array2 it should not give a negative and should instead do the subtraction the other way around(ONE ELEMENTS, POSSIBILITY OF NEGATIVES, SORTED)", ()=>{
        const actualOutput= findDistance([5],[9])
        const expectedOutput= 4
        expect(actualOutput).toBe(expectedOutput)
    })
    test("If in array1 the number is less than the number in array2 it should not give a negative and should instead do the subtraction the other way around(MULTIPLE ELEMENTS, POSSIBILITY OF NEGATIVES, SORTED)", ()=>{
        const actualOutput= findDistance([2,3,4],[6,7,8])
        const expectedOutput= 12
        expect(actualOutput).toBe(expectedOutput)
    })
    test("when given a UNSORTED array return the total distances between the same index in 2 different arrays (MULTIPLE ELEMENTS, POSSIBILITY OF NEGATIVES)", ()=>{
        const actualOutput= findDistance([9,4,6],[8,7,5])
        const expectedOutput= 3
        expect(actualOutput).toBe(expectedOutput)
    })
})

describe("findSimilarities()", ()=>{
    test("if any arrays are empty it returns an error message", ()=>{
        const actualOutput= findSimilarities([],[])
        const actualOutput2= findSimilarities([3],[])
        const actualOutput3= findSimilarities([],[3])
        const expectedOutput= "Error - 1 or more arrays are empty"
        expect(actualOutput).toBe(expectedOutput)
        expect(actualOutput2).toBe(expectedOutput)
        expect(actualOutput3).toBe(expectedOutput)
    })
    test("if the first array has no elements in the right array return 0", ()=>{
        const actualOutput= findSimilarities([9,4,6],[8,7,5])
        const expectedOutput= 0
        expect(actualOutput).toBe(expectedOutput)
    })
    test("if the first array has one shared element with the second array, times it by one and then return the number", ()=>{
        const actualOutput= findSimilarities([9,4,6],[8,7,4])
        const expectedOutput= 4
        expect(actualOutput).toBe(expectedOutput)
    })
    test("works when the array has multiple similar elements between them", ()=>{
        const actualOutput= findSimilarities([3,4,2,1,3,3],[4,3,5,3,9,3])
        const expectedOutput= 31
        expect(actualOutput).toBe(expectedOutput)
    })
})

xdescribe("turn a text file's 2 list of numbers into an array", ()=>{
    test("test file is an array of numbers", ()=>{
        const actualOutput= txtToArrays("text/01-testFile.txt")
        const expectedOutput= [14184, 89299, 44142, 91129, 85560, 65569, 31443, 46882, 86649, 86681]
        expect(actualOutput).toEqual(expectedOutput)
    })
})