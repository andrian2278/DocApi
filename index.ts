
// PER FAR FUNZIONARE, ESEGUIRE QUESTI COMANDI SU UN NUOVO TERMINALE (`CTRL` + `SHIFT` + `ò`) ⬇⬇⬇

// npm i fastify
// npm i fastify-swagger
// npm i nodemon
// npm i @types/node

import fastify from 'fastify'
import * as swagger from 'fastify-swagger'

const app = fastify({
  logger: true,
  ignoreTrailingSlash: true
})

app.register(swagger.default, {
  routePrefix: '/api',
  swagger: {
    info: {
      title: '###Esame ITS 2021',
      description: '###Api Esame',
      version: '1.0.0'
    },
    host: '127.0.0.1:3000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  exposeRoute: true
})

// CHIAMATA GET PER RICEVERE I DATI
app.get("/pippo", (req, reply) => {//###CAMBIA PIPPO!
  reply
    .code(200)  // => IL CODICE CHE VIENE TORNATO
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(
      { 
        name: '###NOME',                    //  |  =>
        theme: '###THEME' ,                 //  |  =>  I CAMPI CHE VERRANNO TORNATI CON LA CHIAMATA `GET`
        attraction: '###ATTRACTION',        //  |  =>  PUOI ANCHE TORNARE UN ARRAY DI DATI VOLENDO, SAREBBE PIU' 'REALE'
        location: '###LOCATION'             //  |  =>
      }
    )
})

// CHIAMATA POST PER INSERIRE I DATI
app.post("/pippo", {//###CAMBIA PIPPO!
    schema: { 
      params: {
        type: "object",
        properties: {
          nome: {
            type: "string",
            description: "###Inserire descrizione chiamata POST (Ex: 'Inserire Nome')"
          },
          cognome: {
            type: "string",
            description: "###Inserire descrizione chiamata POST"
          },
          numero: {
            type: "number",  // esempio aggiunta di un numero
            description: "###Inserire descrizione chiamata POST"
          }
        }
      } 
    }
  }, (req, reply) => {
    reply
      .code(200)  // => IL CODICE CHE VIENE TORNATO
      .send({
        message: "###Data added succesfully!"
      })
  }
)

// CHIAMATA PUT PER MODIFICARE I DATI
app.put("/pippo/:name", {
  schema: { 
    params: {
      type: "object",
      properties: {
        nome: {
          type: "string",
          description: "###Inserire descrizione chiamata POST (Ex: 'Inserire Nome da cambiare')"
        }
      }
    } 
  }
}, (req, reply) => {//###CAMBIA PIPPO!
  reply
    .code(200)  // => IL CODICE CHE VIENE TORNATO
    .send({
      message: "###Data updated"
    })
  }
)

// CHIAMATA DELETE PER ELIMINARE I DATI
app.delete("/pippo/:name", {
  schema: { 
    params: {
      type: "object",
      properties: {
        nome: {
          type: "string",
          description: "###Inserire descrizione chiamata POST (Ex: 'Inserire Nome dell'utente da eliminare')"
        }
      }
    } 
  }
}, (req, reply) => {//###CAMBIA PIPPO!
  reply
    .code(200)  // => IL CODICE CHE VIENE TORNATO
    .send({
      message: "###User deleted succesfully!"
    })
  }
)

app.listen(3000, err => {
  if (err) throw err
})