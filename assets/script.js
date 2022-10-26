var container = document.querySelector(".container");
var blocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (var i = 0; i< blocks.length; i++) {
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "row timeblock");
    var block = document.createElement("div");
    blocks.textContent = moment(blocks[i], 'HH').format('h a'):
    container.appendChild(block);
}