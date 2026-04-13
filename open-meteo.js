const axios = require('axios')
const url1= "https://geocoding-api.open-meteo.com/v1"
const url2= "https://api.open-meteo.com/v1"

const busca = (cidade) => { 
      axios.get(`${url1}/search?name=${cidade}&count=1&language=pt&format=json`).then(res => {
      json=res.data
      console.log(json)
      latitude = json.results[0].latitude
      longitude = json.results[0].longitude
      let name= json.results[0].name
      console.log(`A cidade é ${name} e sua longitude é ${longitude} e sua latitude é ${latitude}`)
    }).catch(err => {
      console.log(`Aconteceu um erro.\n ${err}`)
    })
}

busca("são paulo")
