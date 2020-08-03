const testVar = {}

function testFunc() {
  return "hi"
}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
];

function superbowlWin(arr){
  var checkWin=arr.find(condition=>condition.result=="W");

  if(checkWin!=undefined)
  return checkWin.year;
  else
  return undefined;
  
}

console.log(superbowlWin(record));