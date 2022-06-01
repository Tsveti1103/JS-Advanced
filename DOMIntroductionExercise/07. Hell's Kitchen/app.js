function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let data = JSON.parse(document.getElementsByTagName('textarea')[0].value);
      let bestRestaurant = '';
      let workers;
      let bestSum = 0;
      let avgSalary = 0;
      let maxSalary = 0;
      let result = {}
      for (let i = 0; i < data.length; i++) {

         let [resturantName, workersData] = data[i].split(' - ')
         workersData = workersData.split(', ')

         for (let worker of workersData) {

            let [name, salary] = worker.split(' ')

            if (!result.hasOwnProperty(resturantName)) {
               result[resturantName] = {}
            }
            result[resturantName][name] = Number(salary)
         }

      }
      for (let resturant of Object.entries(result)) {
         let currentName = resturant[0]
         let values = Object.values(resturant[1])
         let currentSum = Object.values(resturant[1]).reduce((a, b) => a + b)
         if (currentSum > bestSum) {
            bestRestaurant = currentName
            bestSum = currentSum
            avgSalary = bestSum / values.length
            maxSalary = Math.max(...values)
            workers = resturant[1]
         }

      }
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${maxSalary.toFixed(2)}`
      workers = Object.entries(workers).sort(([, a], [, b]) => b - a)
      let wokersStr = ''
      for (let worker of workers) {
         wokersStr += `Name: ${worker[0]} With Salary: ${worker[1]} `
      }
      document.querySelector('#workers p').textContent = wokersStr
   }
}
