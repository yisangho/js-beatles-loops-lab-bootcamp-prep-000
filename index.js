// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  var arrTempStore = [];

  for(let i  = 0 ; i < arrMusicians.length ; i++) {
    arrTempStore[i] = arrMusicians[i] + " plays " + arrInstruments[i]
  }
  return arrTempStore
}

function johnLennonFacts(arrJohn) {
  var arrTempStore = [];

  for(let i  = 0 ; i < arrJohn.length ; i++) {
    arrTempStore[i] = arrJohn[i] + "!!!"
  }
  return arrTempStore
}
