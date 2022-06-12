function ticketSorter(arr, sortCriteria) {
    let result = [];
    class Ticet {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    for (let ticet of arr) {
        let [destination, price, status] = ticet.split('|');
        price = Number(price);
        result.push(new Ticet(destination, price, status));
    }
    result.sort((a, b) => {
        if (typeof a[sortCriteria] === 'number') {
            return a[sortCriteria] - (b[sortCriteria]);
        } else {
            return a[sortCriteria].localeCompare(b[sortCriteria]);
        }
    })
    return result;
}
console.log(ticketSorter(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
))