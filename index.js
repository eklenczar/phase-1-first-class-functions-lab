const returnFirstTwoDrivers = function([d1, d2, d3, d4]) {
const firstTwo = [d1, d2, d3, d4].slice(0, 2)
    return firstTwo
}

const returnLastTwoDrivers = function([d1, d2, d3, d4]) {
const lastTwo = [d1, d2, d3, d4].slice(-2)
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }
}

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
// Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument
// and doubles it.

const chris = function fareDoubler(fare) {
    return createFareMultiplier(2) 
}

// const fareDoubler = createFareMultiplier(2)
    
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers([d1, d2, d3, d4], returnFirstTwoDrivers) {
    return returnFirstTwoDrivers([d1, d2, d3, d4])
}