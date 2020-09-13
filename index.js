const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(arrOfObj){
   let winner=(arrOfObj.find(obj=>obj.result==="W"));
   if(winner){return winner.year;}
   else{return winner;}
}