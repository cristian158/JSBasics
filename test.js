const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// If value is an empty string, delete the given prop property from the album.

function updateRecords(records, id, prop, value) {
	var tracklist = records[id].tracks;
	var artisty = records[id].artist;
	if (tracklist){	tracklist.push(value);}
	else {
		records[id].tracks = [];
		records[id].tracks.push(value);
	};
	// if (value == ""){ delete records[id].prop}
	return records;
}


updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
updateRecords(recordCollection, 2468, "tracks", "Free")
// updateRecords(recordCollection, 2548, "artist", "")
console.log(recordCollection);


// updateRecords(recordCollection, 5439, "artist", "ABBA")
// updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
// updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
// updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide
