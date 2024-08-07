/*
Inside an index.js file, copy and paste the following array:

const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping"
];

Next, let's do the following:

Remove the first and last elements.
Add one new element to end of the array.
Add two new elements to the beginning of the array.
Afterward, log your updated musicPlaylist array to the Console!

lightbulbGet a Hint */

const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
  ];

musicPlaylist.shift() && musicPlaylist.pop();

musicPlaylist.push("Imagine Dragons");

musicPlaylist.unshift("The Weekend", "One Direction");

console.log(musicPlaylist);

console.log(musicPlaylist.length);

console.log(musicPlaylist.indexOf("Brick"));