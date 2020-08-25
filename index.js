const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(x){
  let z = x.find(a => a.result === "W")
 if(z)
    return z.year;
    else return undefined;
}