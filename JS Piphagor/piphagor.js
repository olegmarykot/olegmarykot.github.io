var content = document.getElementById("content");

for (var i = 1; i <= 9; i++) {
    var newRow  = document.createElement("div");
    newRow.setAttribute("class", "row");
    for (var j = 1; j <=9; j++){
        var newCell = document.createElement("div");
        if (i == j) {
            newCell.setAttribute("class", "cell cell-main");
        }
        if (i > j) {
            newCell.setAttribute("class", "cell cell-umain");
        }
        if (i < j) {
            newCell.setAttribute("class", "cell cell-omain");
        }          
        newCell.innerText = i * j;
        newRow.appendChild(newCell);
    }
    content.appendChild(newRow);
}
