let myLibrary = [];

//object constructor:
function Bluray(title, director, releaseDate, format, length, label, watched) {
  this.title = title;
  this.director = director;
  this.releaseDate = releaseDate;
  this.format = format;
  this.lenght = length;
  this.label = label;
  this.watched = watched;
}

Bluray.prototype.sayInfo = function () {
  return `${this.title}(${this.releaseDate}) by ${this.director} on ${this.format} released by ${this.label}`;
};

//manual entries
const harakiri = new Bluray(
  "Hara Kiri",
  "Masaki Kobayashi",
  1962,
  "Blu-Ray",
  "133 minutes",
  "Criterion",
  true
);
const deepRed = new Bluray(
  "Deep Red",
  "Dario Argento",
  1975,
  "4K UHD",
  "127 minutes / 105 minutes",
  "Arrow",
  true
);

function addBlurayToLibrary(obj) {
  myLibrary.push(obj);
}
