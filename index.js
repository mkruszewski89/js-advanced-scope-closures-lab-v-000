function produceDrivingRange(range) {
  return function(start, end) {
    distance = Math.abs(parseInt(end) - parseInt(start))
    if (distance < range) {
      return `within range by ${Math.abs(range - distance)}`
    }
    else {
      return `${Math.abs(range - distance)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip
  }
}
