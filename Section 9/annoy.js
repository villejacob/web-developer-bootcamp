// Version 1:

// while (answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("are we there yet?");
// }
// alert("Made it!");

// Version 2:
var answer = prompt("are we there yet?");

while (answer.indexOf("yes") === -1) {
	var answer = prompt("are we there yet?");
}
alert("Made it!");