let pi = Math.PI;

// Function to calculate the area of circle 
function circleArea(r) {
  return (pi * r * r);
 
}

function circleCircumference(r){
    return (2 * pi * r);

}
module.exports ={
    circleArea,
    circleCircumference
}