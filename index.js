function superbowlWin(arrayOfObjects) {
  let choosenResult;
  let newArr = arrayOfObjects.forEach((object) => {
    if (object.result.charAt(0) === "W") {
      console.log(object);
      choosenResult = object.year;
    }
  });
  return choosenResult;

  // return newObj;
  // if (arrayOfObjects.result.find((r) => r === "W")) {
  //   return arrayOfObjects.year;
  // }
  // return undefined;
}