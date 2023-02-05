function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const restaurants = {}
      const inputData = JSON.parse(document.querySelector('textarea').value)
      let bestSalary = 0;
      let bestRestaurant = '';
      for (const line of inputData) {
         let [restName, workers] = line.split(' - ');
         let avgSalary = 0
         workers = workers.split(', ');
         //debugger
         if (!restaurants.hasOwnProperty(restName)) {
            restaurants[restName] = { workers: [] };

            for (const worker of workers) {
               const [name, salary] = worker.split(' ');
               restaurants[restName].workers.push([name, Number(salary)]);
               avgSalary += Number(salary)
            }

            avgSalary = avgSalary / workers.length;
            restaurants[restName].avgSalary = avgSalary;
         } else {

            for (const worker of workers) {
               const [name, salary] = worker.split(' ');
               restaurants[restName].workers.push([name, Number(salary)]);
               avgSalary += Number(salary)

            }

            avgSalary = avgSalary / workers.length;
            restaurants[restName].avgSalary += avgSalary / 2;
         }

         if (restaurants[restName].avgSalary > bestSalary) {
            bestSalary = restaurants[restName].avgSalary;
            bestRestaurant = restName;
         }

      };

      const sortedSalary = restaurants[bestRestaurant].workers.sort((a, b) => b[1] - a[1])
      const format = `Name: ${bestRestaurant} Average Salary: ${bestSalary.toFixed(2)} Best Salary: ${sortedSalary[0][1].toFixed(2)}`

      let bestWorkers = [];

      for (let worker of sortedSalary) {
         bestWorkers.push(`Name: ${worker[0]} With Salary: ${worker[1]}`)
      }

      document.querySelector('#bestRestaurant p').textContent = format;
      document.querySelector('#workers p').textContent = bestWorkers.join(' ');
   }
}
// const objPattern = {
//    restaurantName: {
//       avrSalary: 0,
//       bestSalary: 0,
//       workers: [[name1, 300], [name2, 800]]
//    }
// }