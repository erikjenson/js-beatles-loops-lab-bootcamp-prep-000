var newArray = [];

function theBeatlesPlay(mus,inst){
  for (var i=0; i<[facts.length]; i++){
  newArray.push(`${mus[i]} plays ${inst[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts){
  var i=0;
  while(i < [facts.length]) {
  facts[i] = `${facts[i]}!!!`;
  ++i;
  }
  return facts
}