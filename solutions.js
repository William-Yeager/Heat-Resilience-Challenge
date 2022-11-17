// Gets the solution from last page
var bestSolution = sessionStorage.getItem("bestSolution");
console.log(bestSolution);

// Solutions Array
const solutions = {
	trees: 'Trees Around the Property',
	skirting: 'Skirting',
	swampCoolers: 'Swamp Coolers',
	portableAC: 'Portable AC',
	reflectiveCoating: 'Reflective Coating',
	shadeCanopies: 'Shade Canopies',
	solarCanopies: 'Solar Canopies',
	curtains: 'Curtains',
	shutters: 'Shutters',
	heatPumps: 'Heat Pumps',
	airSealing: 'Air Sealing',
	misters: 'Misters',
	windowTinting: 'Window Tinting'
}

for(var s of Object.entries(solutions)) {
	if(bestSolution == s[0]) {
		bestSolution = s[1];
	}
}

// Post solution to html
var p = document.getElementById("para");
p.innerHTML = bestSolution;
