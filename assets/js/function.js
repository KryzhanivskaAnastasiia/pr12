const requestURL = 'https://jsonplaceholder.typicode.com/users';

const th = document.getElementById("th");
const tb = document.getElementById("tb");

function sendRequest(method, url, body = null) {
   return fetch(url).then( response => {
       return response.json()
   })
}

sendRequest('GET', requestURL).then( data => {
        HeaderToTable(Object.keys(data[0]));
    for(let i=0 ; i<Object.keys(data).length ; i++){
        RowToTableBody(data[i], i);
    }
}).catch( error => console.error(error));

function HeaderToTable(dataToHeader){
    const newRow = th.insertRow(0);
    let newCell;
    let newText;
    for(let i=0 ; i<8 ; i++){
        newCell = newRow.insertCell(i);
        newText = document.createTextNode(dataToHeader[i]);
        newCell.appendChild(newText);
    }
}

function RowToTableBody(dataToRow, index){
    const newRow = tb.insertRow(index);
    let newCell;
    let newText;
    for(let i=0 ; i<8 ; i++){
        newCell = newRow.insertCell(i);
        if(dataToRow[Object.keys(dataToRow)[i]].constructor === Object){
        	 newText = document.createTextNode("More data");
        }else newText = document.createTextNode(dataToRow[Object.keys(dataToRow)[i]]);
        newCell.appendChild(newText);
    }
}