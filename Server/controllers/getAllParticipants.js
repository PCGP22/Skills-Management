const {db} = require("../FireBase")
const {collection,getDocs} = require("firebase/firestore")

async function getAllParticipants(req,res){
    try{
        const data = await getDocs(collection(db,"participants"))
        //Se procesa para evitar que se cuelen datos como la apikey
        const docs = []
        data.forEach(d=>{
          const registry = {
            id: d._key.path.segments[6],
            data: d._document.data.value.mapValue.fields
          }
          docs.push(registry)
        })

        res.send(docs)
    }
    catch(e){
        console.log(e)
        res.status(500).send({msg:"Hubo un error al traer los datos"})
    }
} 

module.exports = {getAllParticipants}

/*
Notas: ejemplo de respuesta

[
    {
    "id": "IEVjO0787QjMlSNyo0XZ",
    "data": {
      "Fecha de entrevista": {
        "stringValue": "10/01/2024"
      },
      "nombre": {
        "stringValue": "Juan Pérez"
      },
      "habilidades": {
        "arrayValue": {
          "values": [
            {
              "stringValue": "Java"
            },
            {
              "stringValue": "JavaScript"
            },
            {
              "stringValue": "React"
            },
            {
              "stringValue": "Angular"
            }
          ]
        }
      },
      "Medio de postulación": {
        "stringValue": "Correo"
      },
      "Procedencia": {
        "stringValue": "CDMX"
      },
      "Entrevistador": {
        "stringValue": "Patricio Castellanos"
      }
    }
  }
]
    
    */