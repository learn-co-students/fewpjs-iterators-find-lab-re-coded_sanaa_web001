/*const superbowlWin = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]*/
function superbowlWin(record) {
    let superbowlWin = record.find(e => e.result == "W");
    return superbowlWin!= undefined ? superbowlWin.year : undefined

}
