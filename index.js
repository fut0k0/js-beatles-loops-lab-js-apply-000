function theBeatlesPlay(musician, instrument) {
  var band = [];
  for (var i = 0; i < musician.length; i++) {
    band[i] = `${musician[i]} plays ${instrument[i]}`;
  }
  return band;
}

function johnLennonFacts(fact) {
  var i = 0;
  while (i < fact.length) {
    fact[i].push `!!!`;
    i++;
  }
  return fact;
}
