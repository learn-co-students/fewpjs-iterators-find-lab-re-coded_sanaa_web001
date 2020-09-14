const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let newArr = arr.find( i => i.result === "W" );
  if (newArr === undefined ) {
    return newArr ;
  }
  return newArr.year ;
}
