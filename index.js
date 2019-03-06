function theBeatlesPlay(musician, instrument) {
  var band = [];
  for (var i = 0; i < musician.length; i++) {
    band[i] = `${musician[i]} plays ${instrument[i]}`;
  }
  return band;
}

