/*

Fix the function `adequateWaterTracker`. `adequateWaterTracker` should return
true if ALL the the weeks in the calendar array having more days in the week
that you drank water than you didn't.

For example, in this week, [0, 0, 3, 1, 0, 4, 0], each day represents how many
cups of water you drank that day. In this example, there were only 3 days where
you drank at least one cup of water.

A calendar is represented by multiple weeks,
[[0, 0, 3, 1, 0, 4, 0], [1, 2, 1, 2, 1, 3, 1]].

If you drank water for at least 4 days of water for every week in the calendar,
then return true. Otherwise, return false.

*/
debugger
function adequateWaterTracker(calendar) {
  debugger
  let weeksCount = 0;
  for (let i = 0; i < calendar.length; i++) {
    debugger
    let daysCount = 0;
    for (let j = 0; j < calendar[i].length; j++) {
      debugger
      let day = calendar[i][j];
      if (day > 0) {
        debugger
        daysCount++;
        //console.log(daysCount);
      }
    }
    if (daysCount >= 4) {
      debugger
      weeksCount++;
      //console.log(weeksCount);
    }
  }

  debugger
  return weeksCount >= calendar.length;
}

const calendar1 = [
  [0, 0, 3, 1, 0, 4, 0],
  [1, 2, 1, 2, 1, 3, 1],
];

console.log(adequateWaterTracker(calendar1)); // false

const calendar2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1],
];

console.log(adequateWaterTracker(calendar2)); // false

const calendar3 = [
  [1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
];

console.log(adequateWaterTracker(calendar3)); // true
