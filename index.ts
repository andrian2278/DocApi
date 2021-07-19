
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
app.get("/OFFERTS_TURING",{
  schema: {
    description: 'Get ALL DATES',
    summary: ' Get ALL DATES ',
    
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'number' },
          location: { type: 'string' },
          img_url: { type: 'string' },
          attraction: { type: 'string' },
          interest_type: { type: 'string' },
          time_open: { type: 'string' },
          time_close: { type: 'string' }, 
          persone_present: { type: 'string' },
          people_entered:{type:'string'},
          people_out:{type:'string'},
          average_stay:{type:'string'},
          issues: { type: 'boolean' },
        
        }
      }
    },

  }
}, (req, reply) => {//###CAMBIA DATE!
 
})

//CHIAMATA GET:ID PER RICEVERE  DATI ID
app.get('/OFFERTS_TURING/:id', {
  schema: {
    description: 'Get DATA By ID',
    summary: 'Get  DATA By ID ',
    params: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          description: 'Inserice un id che cerci '
        }
      }
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          id: { type: 'number' },
          location: { type: 'string' },
          img_url: { type: 'string' },
          attraction: { type: 'string' },
          interest_type: { type: 'string' },
          time_open: { type: 'string' },
          time_close: { type: 'string' }, 
          persone_present: { type: 'string' },
          people_entered:{type:'string'},
          people_out:{type:'string'},
          average_stay:{type:'string'},
          issues: { type: 'boolean' },
        }
      }
    },

  }
}, (req, reply) => {  reply.send({result:true,message:"ecco il lista trovata con questo id" })})




// CHIAMATA POST PER INSERIRE I DATI


app.post("/OFFERTS_TURING", {//###CAMBIA date!
  schema: {
    description: 'Chiamata post Per Inserire i  Dati',
    summary: 'Chiamata post Per Inserire i  Dati',
    body: {
      type: 'object',
      properties: {
        location: { type: 'string',
        description: "Inserisce Localita" 
       },
        img_url: { type: 'string',
        description: "Inserisce URL Imagine" 
       },
        attraction: { type: 'string',
        description: "Inserisce Tipo di attration" 
       },
        interest_type: { type: 'string',
        description: "Inserisce Eventi/Tipo di interesse" 
       },
        time_open: { type: 'string',
        description: "Inserisce Ora di apertura" 
       },
        time_close: { type: 'string',
        description: "Inserisce Ora di chisura"  
      }, 
        persone_present: { type: 'string',
        description: "Inserisce Status di persone /minim/medie/maxim"  
      },
        people_entered:{type:'string',
        description: "Inserisce persone entrate /minim/medie/maxim"
      },
        people_out:{type:'string',
        description: "Inserisce Status di persone uscite /minim/medie/maxim"
      },
        average_stay:{type:'string',
        description: "Inserisce Status di permanenza /minim/medie/maxim"
      },
        issues: { type: 'boolean',
        description: "Inserisce Status 0/1" 
      },
        
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
}, (req, reply) => {
  reply
    .code(200)  // => IL CODICE CHE VIENE TORNATO
    .send({
      message: "Data added succesfully!"
    })
}
)

// CHIAMATA PUT PER MODIFICARE I DATI
app.put("/OFFERTS_TURING/:id", {
  schema: {
    description: 'Chiamata PUT PER MODIFICARE I DATI',
    summary: 'Chiamata PUT PER MODIFICARE I DATI',
    params: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Inserisce id che voi modificare"
        }
      }
    },
    body: {
      type: 'object',
      properties: {
        location: { type: 'string',
        description: "Inserisce Localita" 
       },
        img_url: { type: 'string',
        description: "Inserisce URL Imagine" 
       },
        attraction: { type: 'string',
        description: "Inserisce Tipo di attration" 
       },
        interest_type: { type: 'string',
        description: "Inserisce Eventi/Tipo di interesse" 
       },
        time_open: { type: 'string',
        description: "Inserisce Ora di apertura" 
       },
        time_close: { type: 'string',
        description: "Inserisce Ora di chisura"  
      }, 
        persone_present: { type: 'string',
        description: "Inserisce Status di persone /minim/medie/maxim"  
      },
        people_entered:{type:'string',
        description: "Inserisce persone entrate /minim/medie/maxim"
      },
        people_out:{type:'string',
        description: "Inserisce Status di persone uscite /minim/medie/maxim"
      },
        average_stay:{type:'string',
        description: "Inserisce Status di permanenza /minim/medie/maxim"
      },
        issues: { type: 'boolean',
        description: "Inserisce Status 0/1" 
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
app.delete("/OFFERTS_TURING/:id", {//### 
  schema: {
    description: 'Chiamata DELLETE PER eliminare I DATI',
    summary: 'Chiamata DELLETE PER MODIFICARE I DATI',
    params: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "Inserisce ID Da eliminare"
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
