function theBeatlesPlay(musician, instrument) {
  var band = [];
  for (i = 0; i < musician.length; i++) {
    band[i] = `${musician[i]} plays ${instrument[i]}`;
  }
  return band;
}

