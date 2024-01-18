var currentTrackIndex = null;
var currentVersion = 'MP3';
var currentVersionButton = document.querySelector('button[data-version="MP3"]');

const tracks = [
  { id: "track1", src: "01 Szlugi i kalafiory" },
  { id: "track2", src: "02 Marsz, marsz" },
  { id: "track3", src: "03 Wszystko jedno" },
  { id: "track4", src: "04 Trójkat" },
  { id: "track5", src: "05 (przerywnik)" },
  { id: "track6", src: "06 Mięso" },
  { id: "track7", src: "07 900729" },
];

const audio = document.getElementById('audio');

function playTrack(trackName, id) {
  if (currentTrackIndex !== null) {
    document.getElementById(tracks[currentTrackIndex].id).classList.remove('playing');
  }

  currentTrackIndex = tracks.findIndex(track => track.id === id);

  document.getElementById(tracks[currentTrackIndex].id).classList.add('playing');
  audio.src = getTrackPath(trackName);
  audio.play();
}

function back() {
  if (currentTrackIndex > 0) {
    document.getElementById(tracks[currentTrackIndex].id).classList.remove('playing');
    currentTrackIndex--;
    document.getElementById(tracks[currentTrackIndex].id).classList.add('playing');
    audio.src = getTrackPath(tracks[currentTrackIndex].src);
    audio.play();
  }
}

function next() {
  if (currentTrackIndex < tracks.length - 1) {
    document.getElementById(tracks[currentTrackIndex].id).classList.remove('playing');
    currentTrackIndex++;
    document.getElementById(tracks[currentTrackIndex].id).classList.add('playing');
    audio.src = getTrackPath(tracks[currentTrackIndex].src);
    audio.play();
  }
}

function play() {
  audio.play();
}

function pause() {
  audio.pause();
}

function changeVersion(version) {
  currentVersion = version;

  if(currentVersionButton) {
    currentVersionButton.classList.remove('active-version');
  }
  
  currentVersionButton = document.querySelector(`button[data-version="${version}"]`);
  currentVersionButton.classList.add('active-version');

  if(currentTrackIndex !== null) {
    audio.src = getTrackPath(tracks[currentTrackIndex].src);
    audio.play();
  }
}

function getTrackPath(trackName) {
  if (currentVersion === 'MP3') return `tacoMP3/${trackName}.mp3`;
  else if (currentVersion === 'Vin') return `tacoVin/${trackName}Vin.mp3`;
  else if (currentVersion === 'Tape') return `tacoTape/${trackName}Tape.mp3`;
}
