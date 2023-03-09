function solve(data, criteria) {
    const objData = JSON.parse(data)
    const [prop, value] = criteria.split('-')

    function filt(){
        if (obj.prop === value) {
            return obj
        }
    }

    // const filtered = objData.filter((obj) => {
    //     if (obj[prop] === value) {
    //         return obj
    //     }
    // })
    const filtered = objData.map(obj => obj.filt())

    console.log(filtered);
}
solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female'
)