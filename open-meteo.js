const axios = require('axios')
const url1= "https://geocoding-api.open-meteo.com/v1"
const url2= "https://api.open-meteo.com/v1"

const busca = (cidade) => { 
      axios.get(`${url1}/search?name=${cidade}&count=1&language=pt&format=json`).then(res => {
      json=res.data
      let latitude = json.results[0].latitude
      let longitude = json.results[0].longitude
      let name= json.results[0].name
      console.log(`\n\n-----Informações do local-----\n\nCidade: ${name}\nLongitude: ${longitude}\nLatitude: ${latitude}`)
      condicoes(latitude, longitude)
    }).catch(err => {
      console.log(`Aconteceu um erro.\n ${err}`)
    })
}

const condicoes = async (latitude, longitude) => {
  try {
    let res = await axios.get(`${url2}/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,wind_speed_10m&forecast_days=1`)
    let json=res.data
    let temperatura= json.current.temperature_2m
    let sensacao= json.current.apparent_temperature
    let vento= json.current.wind_speed_10m
    console.log(`\n\n-----Informações do clima-----\n\nTemperatura: ${temperatura} graus\nSensação térmica: ${sensacao} graus\nVelocidade do vento a 10 metros: ${vento}km/h `)
  } catch (err){
    console.log(`Aconteceu um erro.\n ${err}`)
  }
}
busca("paris")