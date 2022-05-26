function townPopulation(towns){
    const result = {}
    for (let town of towns){
        let info = town.split(" <-> ");
        let name = info[0];
        let population = Number(info[1]);
        if (result[name] == undefined){
            result[name] = 0
        }
        result[name]+=population
    }
    for (let obj in result){
        console.log(`${obj} : ${result[obj]}`)
    }
}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)