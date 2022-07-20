
async function fillTable(url, table) {
    const tableHead = example.querySelector('thead');
    const tableBody = example.querySelector('tbody');
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0]);

    //clickable rows
 $('#example').on('click', 'td', function(){
   
   const tbody = document.querySelector('#example');
   tbody.addEventListener('click', function (e) {
     const cell = e.target.closest('td');
     if (!cell) {return;} // Quit, not clicked on a cell
     const row = cell.parentElement;
     console.log(cell.innerHTML, row.rowIndex, cell.cellIndex);
     const temp = cell.innerHTML;
    

    
     
     if(cell.cellIndex > 0){
         window.location.assign("infoPage.html");
         
         
     } else {
        
            window.location.assign(temp);
        
     }
    //window.location.assign(temp);
     
   
     
    
     
   });

});







    //clear table
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    //populate header
    for(const headerText in data[0]){
        const HeaderElement = document.createElement("th");
        HeaderElement.textContent = headerText;
        tableHead.querySelector('tr').appendChild(HeaderElement);
    }

    //populate rows
    for(let i = 0; i < data.length; i++){
        const obj = Object.values(data[i]);
        const rowELement = document.createElement("tr");
        for(const cellText of obj){
            if(typeof(cellText) === 'object'){
            const cellElement = document.createElement("td");
            cellElement.textContent = Object.values(cellText);
            rowELement.appendChild(cellElement);
            } else {
                const cellElement = document.createElement("td");
                cellElement.textContent = cellText;
                rowELement.appendChild(cellElement);
            }
        }
        tableBody.appendChild(rowELement);
    }

    //jquery, gives table paginations, sorting, and search
    $(document).ready(function () {
        $('#example').DataTable();
    
       
    });
}

fillTable('https://api.spacexdata.com/latest/history', document.querySelector('table table-striped'));




