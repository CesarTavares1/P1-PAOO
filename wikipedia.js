const axios = require('axios')

 

let url = 'https://pt.wikipedia.org/api/rest_v1/page/summary'

 

let wikipedia = async function (termo) {

    try{

       let json = await axios.get(`${url}/${termo}`, {

       headers: {

        "User-Agent": "Iginio https://link-contato.com.br"

        }

})

        json=json.data

        console.log(`\nTitulo: ${json.title}\n\nResumo:\n${json.extract}\n`)

}

    catch(err){

        console.log(`Um erro aconteceu\n${err}`)

    }

}

 

wikipedia("Paris")
