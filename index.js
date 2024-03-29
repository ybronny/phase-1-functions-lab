function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}


function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}


function distanceTravelledInFeet(start, destination) {
    const distanceBlocks = Math.abs(destination - start);
    const feetPerBlock = 264;
    return distanceBlocks * feetPerBlock;
}


function calculatesFarePrice(start, destination) {
    if (destination <= 400) {
        return 0;
    }
     else if (destination > 400 && destination <=  2000) {
        
        return 25;
    }

     else if (destination > 2500) {  

        return "cannot travel that far"
    }

}

