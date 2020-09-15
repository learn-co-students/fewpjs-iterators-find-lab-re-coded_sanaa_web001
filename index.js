const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arr) => {
   let x = arr.find(ele => ele.result === "W");
   if (x) {
    return x.year;
  } else {
    return undefined;
  }

}
