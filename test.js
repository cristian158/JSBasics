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
	else if (tracklist == false){
		records[id].tracks = [];
		records[id].tracks.push(value);
	} else if (prop != tracklist && value != "") { records[id].prop = value };
	return records;
	// if (value == ""){ delete records[id].prop}
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

//
// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// if (prop != tracks && value != "") { records[id].prop = value }
//
//
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// if (prop == tracks && records[id].tracks == false) {records[id].tracks = []; records[id].tracks.push(value);
//
//
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// if (prop == tracks && value != '') { tracklist.push(value)}
//
//
// If value is an empty string, delete the given prop property from the album.
// if (value="") {delete records.prop}
