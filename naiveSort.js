function simpleJsSort(artists) {
  return artists.sort((a, b) => b.count - a.count);
}

function manualSort(artist) {
  for (let i = 0; i < artist.length; i++) {
    var max = artist[i];
    var maxElementIdx = -1;
    for (let j = i + 1; j < artist.length; j++) {
      if (max.count < artist[j].count) {
        max = artist[j];
        maxElementIdx = j;
      }
    }
    if (maxElementIdx != -1) {
      var temp = artist[i];
      artist[i] = max;
      artist[maxElementIdx] = temp;
    }
  }
  return artist;
}

var artists = [
  { name: "radiohead", count: 140 },
  { name: "gnr", count: 120 },
  { name: "stereophonics", count: 111 },
  { name: "paritosh", count: 190 },
  { name: "metallica", count: 90 },
  { name: "sufjan stevens", count: 112 },
  { name: "rhcp", count: 82 },
  { name: "elliot smith", count: 181 },
  { name: "linkin park", count: 870 },
];

console.log(manualSort(artists));
