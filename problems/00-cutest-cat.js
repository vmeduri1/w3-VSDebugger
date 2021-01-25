/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

function cutestCat(cats) {
  debugger
  let cutest = -Infinity;
  let catKey = "";
  let i = 0;
  let obj = {};

  while (i < cats.length) {
    debugger
    const cat = cats[i];
    if (cat.cuteness > cutest) {
      cutest = cat.cuteness;
      catKey = cat.name;
      obj["name"] = cat.name;
      obj["cuteness"] = cat.cuteness;
    }
    i++;
  }
  debugger

  return obj;
}
debugger
const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
