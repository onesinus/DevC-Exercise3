function loadTableData(){
	fetch("https://swapi.co/api/planets")
	  .then((resp) => resp.json())
	  .then(function(data) {
	  	console.log(data);
	    addTr(data.results);
      })
	  .catch(function(error) {
	  	console.log(error);
	    // If there is any error you will catch them here
	  });   
}

function addTr(data){
	let tbody 	= document.getElementById("isiTable");	
	for (let [key, value] of Object.entries(data)) {
		let tr 		= document.createElement('tr');
		for (column in value) {
			console.log(column);
			if(value.hasOwnProperty(column)){
			    let td			= document.createElement('td');
				if(column == "films" || column == "residents"){
					value[column] = value[column].join(";")
					td.setAttribute("style", "width: 10px");
				}
			    td.innerHTML 	= value[column];	
			    tr.appendChild(td);
			}
		}

		tbody.appendChild(tr);
	}

}