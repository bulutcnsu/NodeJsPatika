let pi = 3.14159265358979323846;
const argument = process.argv.slice(2);

function findArea(r) {
  
  var Alan = pi*r*r;
  console.log("Yarıçapı " + r + "  Olan Dairenin Alanı: " + Alan)
  }
  findArea(argument[0]*1);