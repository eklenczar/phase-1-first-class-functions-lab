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

const fareDoubler = createFareMultiplier(2)
    
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers([d1, d2, d3, d4], returnFirstTwoDrivers) {
    return returnFirstTwoDrivers([d1, d2, d3, d4])
}
