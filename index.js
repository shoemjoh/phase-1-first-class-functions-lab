// Code your solution in this file!
const returnFirstTwoDrivers = function (driverArray) {
    let newArray = [];
    for (let i = 0; i < 2; i++) {
        newArray.push(driverArray[i]);
    }
    return newArray;
}

const returnLastTwoDrivers = function (driverArray) {
    return driverArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiple) {
    return function (fare) {
        return fare * multiple;
    }
}

const multiplier = createFareMultiplier();

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
}
function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
}
function selectDifferentDrivers(drivers, driverSelectorFunction) {
    return driverSelectorFunction(drivers);
}