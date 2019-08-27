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
	for (var i = 0; i < data.length; i++) {
	    let tr 				= document.createElement('tr');
	    let tdName			= document.createElement('td');
	    tdName.innerHTML 	= data[i].name;	

	    let tdRotation		= document.createElement('td');
	    tdRotation.innerHTML= data[i].rotation_period;

	    let tdOrbital		= document.createElement('td');
	    tdOrbital.innerHTML	= data[i].orbital_period;

	    let tdDiameter		= document.createElement('td');
	    tdDiameter.innerHTML= data[i].diameter;

	    let tdClimate		= document.createElement('td');
	    tdClimate.innerHTML	= data[i].climate;

	    let tdGravity		= document.createElement('td');
	    tdGravity.innerHTML	= data[i].gravity;

	    let tdTerrain		= document.createElement('td');
	    tdTerrain.innerHTML	= data[i].terrain;

	    let tdSurfaceWater	= document.createElement('td');
	    tdSurfaceWater.innerHTML	= data[i].surface_water;

	    let tdPopulation	= document.createElement('td');
	    tdPopulation.innerHTML	= data[i].population;

	    let tdResidents		= document.createElement('td');
	    tdResidents.innerHTML	= data[i].residents;

	    let tdFilms		= document.createElement('td');
	    tdFilms.innerHTML	= data[i].films;

	    tr.appendChild(tdName);
	    tr.appendChild(tdRotation);
	    tr.appendChild(tdOrbital);
	    tr.appendChild(tdDiameter);
	    tr.appendChild(tdClimate);
	    tr.appendChild(tdGravity);
	    tr.appendChild(tdTerrain);
	    tr.appendChild(tdSurfaceWater);
	    tr.appendChild(tdPopulation);
	    // tr.appendChild(tdResidents);
	    // tr.appendChild(tdFilms);

		tbody.appendChild(tr);
	}

}