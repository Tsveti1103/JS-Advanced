function towns(app) {
    let result = [];
    for (let i = 1; i < app.length; i++) {
        let currentRow = app[i].slice(2, -2).split(' | ')
        a = Number(currentRow[1]).toFixed(2)
        b = Number(currentRow[2]).toFixed(2)
        obj = { Town: currentRow[0], Latitude: Number(a), Longitude: Number(b) }
        result.push(obj)
    }
    console.log(JSON.stringify(result))
}

towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)