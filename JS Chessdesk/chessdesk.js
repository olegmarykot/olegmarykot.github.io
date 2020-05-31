var content = document.getElementById("content");

for (var i = 1; i <= 8; i++) {
    var newRow  = document.createElement("div");
    newRow.setAttribute("class", "row");
    for (var j = 1; j <=8; j++){
        var newCell = document.createElement("div");
        if ( i == j) {
            newCell.setAttribute("class", "cell cell-white");
        }
        if ( Math.abs(i - j) == 1) {
            newCell.setAttribute("class", "cell cell-black");
        }
        if ( Math.abs(i - j) == 2) {
            newCell.setAttribute("class", "cell cell-white");
        }
        if ( Math.abs(i - j) == 3) {
            newCell.setAttribute("class", "cell cell-black");
        }
        if ( Math.abs(i - j) == 4) {
            newCell.setAttribute("class", "cell cell-white");
        }
        if ( Math.abs(i - j) == 5) {
            newCell.setAttribute("class", "cell cell-black");
        }
        if ( Math.abs(i - j) == 6) {
            newCell.setAttribute("class", "cell cell-white");
        }
        if ( Math.abs(i - j) == 7) {
            newCell.setAttribute("class", "cell cell-black");
        }                  
        newRow.appendChild(newCell);
    }
    content.appendChild(newRow);
}
