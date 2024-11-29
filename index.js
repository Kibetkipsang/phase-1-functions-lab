
const BlocksInFeet=264
const HqInBlocks=42
let StartBlock=42;
let EndingBlock=50;
function distanceFromHqInBlocks(Block){
    return Math.abs(Block - HqInBlocks);
}
function distanceFromHqInFeet(Block){
    return distanceFromHqInBlocks(Block) * BlocksInFeet;
}
function distanceTravelledInFeet(StartBlock, EndingBlock){
    let distanceInBlocks = Math.abs(EndingBlock-StartBlock);
    return distanceInBlocks * BlocksInFeet;
}
function calculatesFarePrice(EndingBlock, StartBlock){
   const distanceTravelledInFeetPrice = distanceTravelledInFeet(StartBlock, EndingBlock);
if (distanceTravelledInFeetPrice<=400){
return 0;
}
else if (distanceTravelledInFeetPrice > 400 && distanceTravelledInFeetPrice <= 2000) {
    let CentsPerFoot = 2; 
    return ((distanceTravelledInFeetPrice - 400) * CentsPerFoot) / 100;
}  
else if (distanceTravelledInFeetPrice>2000 && distanceTravelledInFeetPrice <=2500){
    return 25;
}
else{
    return  'cannot travel that far'  
}
}
