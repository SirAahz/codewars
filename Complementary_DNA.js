//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
function dnaStrand(dna) {
    let dna2 = "";
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            dna2 += "T";
        }
        else if (dna[i] === "T") {
            dna2 += "A";
        }
        else if (dna[i] === "C") {
            dna2 += "G";
        }
        else if (dna[i] === "G") {
            dna2 += "C";
        }
    }
    return dna2;
}