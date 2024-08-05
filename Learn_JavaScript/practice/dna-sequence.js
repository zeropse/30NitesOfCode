/*
DNA is made of the following four pieces:
Adenine (A)
Cytosine (C)
Guanine (G)
Thymine (T)
Collectively, these four pieces represent the unique genetic makeup of most life forms!

Create a 24-element myDNA array of that by randomly choosing one of these four pieces. Start with the following array:

const dnaPieces = ["A", "C", "G", "T"];

Inside a loop, to build the myDNA array by doing the following:

Get three random index numbers from dnaPieces with Math.floor() and Math.random().
Build a string of three letters by accessing the dnaPieces array elements with the three random index numbers.
Add this string to the myDNA array.
Lastly, log the myDNA array to the Console. The output may look like this:

[
  "TAG", "GAG", "ATA", "AAC",
  "AAT", "CTT", "AGG", "TAG",
  "ATC", "ACT", "GAG", "TTA",
  "CTG", "ACG", "GAC", "TCC",
  "GTA", "ACT", "GCA", "GTA",
  "GCG", "GCT", "TCT", "TAA"
]
*/

const dnaPieces = ["A", "C", "G", "T"];
let myDNA = [];

function check(){
    let randDNA1 = Math.floor(Math.random() * dnaPieces.length);
    let randDNA2 = Math.floor(Math.random() * dnaPieces.length);
    let randDNA3 = Math.floor(Math.random() * dnaPieces.length);

    let x = dnaPieces[randDNA1];
    let y = dnaPieces[randDNA2];
    let z = dnaPieces[randDNA3];

    let sequence = `${x}${y}${z}`;
    myDNA.unshift(sequence);
}

for (i=0; i < 24; i++){
    check()
}

console.log(myDNA)