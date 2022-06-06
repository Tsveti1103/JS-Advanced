function filterEmployees(data, criteria){
        data = JSON.parse(data);
        let result = [];
        const [criteriaKey,criteriaValue] = criteria.split('-');
        let count = 0;
        for(let person of data) {
            if(person[criteriaKey] == criteriaValue){
                result.push(`${count}. ${person.first_name} ${person.last_name} - ${person.email}`)
                count++;
            }
        }
       console.log(result.join('\n'));
}


filterEmployees(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'

)