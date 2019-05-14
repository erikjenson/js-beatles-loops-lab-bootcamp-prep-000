var newArray = [];

function theBeatlesPlay(mus,inst){
  for (var i=0; i<4; i++){
  newArray.push(`${mus[i]} plays ${inst[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts){
  var i=[facts].length;
  while(i>=0) {
  facts[i] = `${facts[i]}!!!`;
  --i;
  }
  return facts
}