//HTML + game var :
var btnTable = document.createElement('table');
btnTable.id = "button";
var btnTr = document.createElement('tr');
btnTable.appendChild(btnTr);

// button gameButton
for (var j = 0; j < 7; j++) {
    var btnTh = document.createElement('th');
    btnTable.lastChild.appendChild(btnTh);
    btnTh.addEventListener("click", addJeton)
    btnTh.innerText = j
}

 // GameBoard
var table = document.createElement('table');
var puissance4 = []; //
for (var i = 0; i < 6; i++) {

    var tr = document.createElement('tr');
    table.appendChild(tr);


    puissance4.push([]);

    for (var j = 0; j < 7; j++) {
        var th = document.createElement('th');
        table.lastChild.appendChild(th);
        puissance4[i].push(0);
    }
}


//Add two table to Dom
document.getElementsByTagName('body')[0].appendChild(btnTable);
document.getElementsByTagName('body')[0].appendChild(table);
console.log(puissance4);



// game function :
function positionJeton(column){
    for (var i = 0; i < 6; i++) {
        console.log(column + '>>' + i);
        if ( puissance4[i][column] != 0){
            // console.log(i-1);
            return i-1;
        }
    }
    // console.log(5);
    return 5;
}

// main :



function addJeton(){
    console.log(this);
    var column = this.innerText;
    puissance4[positionJeton(column)][column] = "B"
    console.log(puissance4);
}
