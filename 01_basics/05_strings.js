const name = "Sahil";
let repoCount = 43;

console.log(`${name} ${repoCount}`); // String Interpolation.Benefits as we can apply post processing in it

let gameName = new String("GTA V ");
console.log(gameName);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.concat(repoCount));
console.log(gameName.indexOf('T'));
console.log(gameName.substring(-2,2));
console.log(gameName.slice(2,3));

const url = "https://www.google.com/hitesh%20choudhary";


console.log(url.replace("%20","-"));
console.log();