// ----- DECISION MATRIX -----
const baseValues = {
    cost:14, 
    installation:4.67, 
    maintenance:9.33,
    useability:9.33,
    effectiveness:18.67,
    resilience:18.67,
    sustainability:4.67,
    durability:14,
    aesthetic:9.33 
}
const trees = { 
    cost:3, 
    installation:2, 
    maintenance:2,
    useability:5,
    effectiveness:2,
    resilience:4,
    sustainability:5,
    durability:4,
    aesthetic:4,
    name:'Trees'
} 
const skirting = { 
    cost:2, 
    installation:2, 
    maintenance:3,
    useability:5,
    effectiveness:4,
    resilience:5,
    sustainability:4,
    durability:4,
    aesthetic:3,
    name:'Skirting'
} 
const swampCoolers = { 
    cost:3, 
    installation:1, 
    maintenance:4,
    useability:4,
    effectiveness:5,
    resilience:3,
    sustainability:3,
    durability:3,
    aesthetic:2,
    name:'Swamp Coolers'
} 
const portableAC = { 
    cost:3, 
    installation:4, 
    maintenance:3,
    useability:4,
    effectiveness:4,
    resilience:3,
    sustainability:3,
    durability:4,
    aesthetic:2,
    name:'Portable AC'
} 
const reflectiveCoating = { 
    cost:4, 
    installation:3, 
    maintenance:4,
    useability:5,
    effectiveness:2,
    resilience:5,
    sustainability:3,
    durability:5,
    aesthetic:3 ,
    name:'Reflective Coating'
} 
const shadeCanopies = { 
    cost:1, 
    installation:0, 
    maintenance:0,
    useability:0,
    effectiveness:5,
    resilience:0,
    sustainability:0,
    durability:0,
    aesthetic:4 ,
    name:'Shade Canopies'
} 
const solarCanopies = { 
    cost:1, 
    installation:0, 
    maintenance:0,
    useability:0,
    effectiveness:5,
    resilience:0,
    sustainability:0,
    durability:0,
    aesthetic:2 ,
    name:'Solar Canopies'
} 
const curtains = { 
    cost:5, 
    installation:0, 
    maintenance:0,
    useability:0,
    effectiveness:0,
    resilience:0,
    sustainability:0,
    durability:0,
    aesthetic:4 ,
    name:'Curtains'
} 
const shutters = { 
    cost:5, 
    installation:0, 
    maintenance:0,
    useability:0,
    effectiveness:0,
    resilience:0,
    sustainability:0,
    durability:0,
    aesthetic:4,
    name:'Shutters' 
} 
const heatPumps = { 
    cost:2, 
    installation:0, 
    maintenance:0,
    useability:0,
    effectiveness:0,
    resilience:0,
    sustainability:0,
    durability:0,
    aesthetic:2,
    name:'Heat Pumps'
} 
const airSealing = { 
    cost:2, 
    installation:0, 
    maintenance:0,
    useability:0,
    effectiveness:0,
    resilience:0,
    sustainability:0,
    durability:0,
    aesthetic:3 ,
    name:'Air Sealing'
} 
const misters = { 
    cost:2, 
    installation:3, 
    maintenance:3,
    useability:4,
    effectiveness:5,
    resilience:4,
    sustainability:4,
    durability:4,
    aesthetic:3,
    name:'Misters'
}  
const windowTinting = { 
    cost:4, 
    installation:2, 
    maintenance:4,
    useability:5,
    effectiveness:3,
    resilience:5,
    sustainability:4,
    durability:4,
    aesthetic:3,
    name:'Window Tinting'
} 

// Array of viable solutions
const solutions = { trees, skirting, swampCoolers, portableAC, reflectiveCoating, shadeCanopies, solarCanopies, curtains, shutters, heatPumps, airSealing, misters, windowTinting }


document.getElementById("singlebutton-0").onclick = function() {	
    // CHANGES VALUES BASED OFF OF ANSWERS
    // BUDGET
    var budget250 = document.getElementById("multipleradios-1-0").checked;
    var budget500 = document.getElementById("multipleradios-1-1").checked;
    var budget1000 = document.getElementById("multipleradios-1-2").checked;
    if(budget250) {
        baseValues.cost += 3;
    } else if (budget500) {
        basValues.cost -= 5;
    } else if (budget1000) {
        baseValues.cost -= 7;
    }

    // OUTSIDE
    var outsideSolutionsFALSE = document.getElementById("multipleradios-2-1").checked;
    if(outsideSolutionsFALSE) {
        delete solutions.trees;
        delete solutions.solarCanopies;
        delete solutions.shadeCanopies;
    }

    // AVERAGE TEMP
    var av90 = document.getElementById("multipleradios-3-0").checked;
    var av100 = document.getElementById("multipleradios-3-1").checked;
    var av110 = document.getElementById("multipleradios-3-2").checked;
    if(av90) {
        baseValues.effectiveness -= 5;
    } else if (av100) {
        baseValues.effectiveness -= 2;
    }

    // PEAK TEMP
    var peak100 = document.getElementById("multipleradios-4-0").checked;
    var peak110 = document.getElementById("multipleradios-4-1").checked;
    var peak120 = document.getElementById("multipleradios-4-2").checked;
    if(peak100) {
        baseValues.durability -= 3;
    } else if (av120) {
        baseValues.durability += 3;
    }

    // ENVIRONMENTAL
    var envSome = document.getElementById("multipleradios-5-1").checked;
    var envVery = document.getElementById("multipleradios-5-2").checked;
    if(envSome) {
        baseValues.sustainability += 3;
    } else if (envVery) {
        baseValues.sustainability += 8;
    }

    // INSTALL
    var install0 = document.getElementById("multipleradios-6-0").checked;
    var install2 = document.getElementById("multipleradios-6-1").checked;
    var install4 = document.getElementById("multipleradios-6-2").checked;
    if(install0) {
        baseValues.installation += 8;
    } else if (install2) {
        baseValues.sustainability += 4;
    }

    // SOLUTIONS ALREADY
    var haveTrees = document.getElementById("multipleradios-7-0").checked;
    var haveSkirting = document.getElementById("multipleradios-7-1").checked;
    var haveSwampCoolers = document.getElementById("multipleradios-7-2").checked;
    var havePortableAC = document.getElementById("multipleradios-7-3").checked;
    var haveReflectiveCoating = document.getElementById("multipleradios-7-4").checked;
    var haveShadeCanopies = document.getElementById("multipleradios-7-5").checked;
    var haveSolarCanopies = document.getElementById("multipleradios-7-6").checked;
    var haveCurtains = document.getElementById("multipleradios-7-7").checked;
    var haveShutters = document.getElementById("multipleradios-7-8").checked;
    var haveHeatPumps = document.getElementById("multipleradios-7-9").checked;
    var haveAirSealing = document.getElementById("multipleradios-7-10").checked;
    var haveMisters = document.getElementById("multipleradios-7-11").checked;
    var haveWindowTinting = document.getElementById("multipleradios-7-12").checked;
    if(haveTrees) {
        if(outsideSolutionsFALSE == false) {
            delete solutions.trees;
        }
    } 
    if(haveSkirting) {
        delete solutions.skirting;
    }
    if(haveSwampCoolers) {
        delete solutions.swampCoolers;
    }
    if(havePortableAC) {
        delete solutions.portableAC;
    }
    if(haveReflectiveCoating) {
        delete solutions.reflectiveCoating;
    }
    if(haveShadeCanopies) {
        if(outsideSolutionsFALSE == false) {
            delete solutions.shadeCanopies;
        }
    }
    if(haveSolarCanopies) {
        if(outsideSolutionsFALSE == false) {
            delete solutions.solarCanopies;
        }
    }
    if(haveCurtains) {
        delete solutions.curtains;
    }
    if(haveShutters) {
        delete solutions.shutters;
    }
    if(haveHeatPumps) {
        delete solutions.heatPumps;
    }
    if(haveAirSealing) {
        delete solutions.airSealing;
    }
    if(haveMisters) {
        delete solutions.misters;
    }
    if(haveWindowTinting) {
        delete solutions.windowTinting;
    }

    console.log(solutions);

    var biggest = 0.00;
    var bestSolution = '';

    // MULTIPLIES
    for(const solution of Object.entries(solutions)) {
        var total = 0;
        total += solution[1].cost * baseValues.cost;
        total += solution[1].installation * baseValues.installation;
        total += solution[1].maintenance * baseValues.maintenance;
        total += solution[1].useability * baseValues.useability;
        total += solution[1].effectiveness * baseValues.effectiveness;
        total += solution[1].resilience * baseValues.sustainability;
        total += solution[1].durability * baseValues.durability;
        total += solution[1].aesthetic * baseValues.aesthetic;
        total += solution[1].sustainability * baseValues.sustainability;
        
        if (total > biggest) {
            biggest = total;
            bestSolution = solution[0];
        }
    }
    

    alert(bestSolution);
    window.location.reload();
};
