//HTML + game var :
var btnTable = document.createElement('table');
btnTable.id = "button";
var btnTr = document.createElement('tr');
btnTable.appendChild(btnTr);
for (var j = 0; j < 7; j++) {
    var btnTh = document.createElement('th');
    btnTable.lastChild.appendChild(btnTh);
}

var table = document.createElement('table');
var puissance4 = []; // game boarb
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

document.getElementsByTagName('body')[0].appendChild(btnTable);
document.getElementsByTagName('body')[0].appendChild(table);
console.log(puissance4);

// game function :
function addJeton(column){
    for (var i = 0; i < 6; i++) {
        console.log(column + '>>' + i);
        if ( puissance4[column][i] != 0){
            // console.log(i-1);
            return i-1;
        }
    }
    // console.log(5);
    return 5;
}
console.log(addJeton(0));

// main :
