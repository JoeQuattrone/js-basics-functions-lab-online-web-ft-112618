// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let hqBlock = 42;
  return Math.abs(distance -hqBlock);
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(distanceFromHqInFeet(end) -  distanceFromHqInFeet(start));
}

function calculatesFarePrice(start, end) {
  let costPerFoot;
  distance = distanceTravelledInFeet(start, end)

  if (distance <= 400) {
    return 0;
  }
  else if (distance > 400 && distance <= 2000) {
    costPerFoot = .02
    return (distance - 400) * costPerFoot;
  }
  else if (distance >2000 && distance <= 2500) {
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}
