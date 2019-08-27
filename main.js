function loadTableData(filter = ''){
	fetch("https://swapi.co/api/planets")
	  .then((resp) => resp.json())
	  .then(function(res) {
	    addTr(filter,res.results);
      })
	  .catch(function(error) {
	  	console.log("api ga tembus bro");
	  });   
}

function addTr(filter,data){	
	console.log(data);
	let tbody 	= document.getElementById("isiTable");	
	tbody.innerHTML = ''; //clear Tbody first

	for (let [key, value] of Object.entries(data)) {
		let tr 		= document.createElement('tr');
		let totalTdMatches = 0;
		for (column in value) {
			if(value[column].indexOf(filter.toLowerCase()) !== -1){totalTdMatches++}

			// console.log(column);
			if(value.hasOwnProperty(column)){
			    let td			= document.createElement('td');
				if(column == "films" || column == "residents"){ // belum bisa atur widthnya, belum nampilin data
					value[column] = value[column].join(";")
					td.setAttribute("style", "width: 10px");
				}else{				
				    td.innerHTML 	= value[column];	
				}
			    tr.appendChild(td);
			}
		}

		console.log(totalTdMatches);
		// console.log(filter);
		if(totalTdMatches > 0){ // show tr only if there are data matches
			tbody.appendChild(tr);
		}
	}

}