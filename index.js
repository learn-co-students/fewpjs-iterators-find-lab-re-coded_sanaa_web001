const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(arr){
  const newarr=arr.find(s => s.result === "W");
  console.log(newarr);
  if(newarr!==undefined){
    return newarr.year;
  }
  else{
    return undefined;
  }
}
