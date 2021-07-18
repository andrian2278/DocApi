
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
      title: 'Esame ITS 2021',
      description: 'Documentazione Api',
      version: '1.0.0'
    },
    host: '127.0.0.1:3000/',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  },
  exposeRoute: true
})

// CHIAMATA GET PER RICEVERE I DATI
app.get("/ParkList",{
  schema: {
    description: 'Get data',
    summary: 'Get  DATA by ID ',
    
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'number' },
          localita: { type: 'string' },
          nomepark: { type: 'string' },
          tema: { type: 'string' },
          tip_attrazioni: { type: 'string' },
          disponibilita: { type: 'boolean' },
          time_open: { type: 'string' },
          time_close: { type: 'string' },
          some: { type: 'string' }
        }
      }
    },

  }
}, (req, reply) => {//###CAMBIA DATE!
 
})

//CHIAMATA GET:ID PER RICEVERE  DATI ID
app.get('/ParkList/:id', {
  schema: {
    description: 'Get data',
    summary: 'Get  DATA by ID ',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'user id'
        }
      }
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'number' },
          localita: { type: 'string' },
          nomepark: { type: 'string' },
          tema: { type: 'string' },
          tip_attrazioni: { type: 'string' },
          disponibilita: { type: 'boolean' },
          time_open: { type: 'string' },
          time_close: { type: 'string' },
          some: { type: 'string' }
        }
      }
    },

  }
}, (req, reply) => {  reply.send({result:true,message:"ecco il lista trovata con questo id" })})




// CHIAMATA POST PER INSERIRE I DATI


app.post("/ParkList", {//###CAMBIA date!
  schema: {
    
    body: {
      type: 'object',
      properties: {
        localita: { 
        type: 'string',
        description: "###Inserisce Localita" 
        },
        nomepark: { 
          type: 'string',
          description: "###Inserire Nome" 
        },
        tema: { 
          type: 'string',
          description: "###Inserire Tema" 
        },
        tip_attrazioni: { 
          type: 'string',
          description: "###Inserire Tipi" 
        },
        disponibilita: { 
          type: 'boolean',
          description: "###Inserire 1/0" 
        },
        time_open: { 
          type: 'string',
          description: "###Inserire ora" 
        },
        time_close: { 
          type: 'string',
          description: "###Inserire ora" 
        },
        
      }
    },
    response: {
      201: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'number' },
          localita: { type: 'string' },
          nomepark: { type: 'string' },
          tema: { type: 'string' },
          tip_attrazioni: { type: 'string' },
          disponibilita: { type: 'boolean' },
          time_open: { type: 'string' },
          time_close: { type: 'string' },
          some: { type: 'string' }
        }
      }
    },
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
app.put("/ParkList/:id", {
  schema: {
    params: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "###Inserire descrizione chiamata POST (Ex: 'Inserire Nome dell'utente da eliminare')"
        }
      }
    },
    body: {
      type: 'object',
      properties: {
        localita: { 
        type: 'string',
        description: "###Inserisce Localita" 
        },
        nomepark: { 
          type: 'string',
          description: "###Inserire Nome" 
        },
        tema: { 
          type: 'string',
          description: "###Inserire Tema" 
        },
        tip_attrazioni: { 
          type: 'string',
          description: "###Inserire Tipi" 
        },
        disponibilita: { 
          type: 'boolean',
          description: "###Inserire 1/0" 
        },
        time_open: { 
          type: 'string',
          description: "###Inserire ora" 
        },
        time_close: { 
          type: 'string',
          description: "###Inserire ora" 
        },
        
      }
    },
  }
}, (req, reply) => {//###CAMBIA DATE!
  reply
    .code(200)  // => IL CODICE CHE VIENE TORNATO
    .send({
      message: "###Data updated"
    })
}
)

// CHIAMATA DELETE PER ELIMINARE I DATI
app.delete("/ParkList/:id", {
  schema: {
    params: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "###Inserire descrizione chiamata POST (Ex: 'Inserire Nome dell'utente da eliminare')"
        }
      }
    }
  }
}, (req, reply) => {//###CAMBIA DATE!
  reply
    .code(200)  // => IL CODICE CHE VIENE TORNATO
    .send({
      message: "###User deleted succesfully!"
    })
}
)

app.listen(3001, err => {
  if (err) throw err
})
