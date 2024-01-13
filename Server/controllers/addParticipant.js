const {db} = require('../FireBase')
const {collection,addDoc} = require("firebase/firestore")


async function addParticipant (req,res){
    try{
        const data = req.body
        await addDoc(collection(db,"participants"),data)
        res.send({msg:"Participante añadido exitosamente"})
    }   
    catch(e){
        console.log(e)
        res.status(500).send({msg:"Hubo un error al añadir al participante"})
    } 
}

module.exports = {addParticipant}

/*
Notas:

El estándar de datos es el siguiente:

{
    "nombre": "Juan Pérez",
    "Procedencia": "CDMX",
    "Fecha de entrevista": "10/01/2024",
    "Entrevistador": "Patricio Castellanos",
    "Medio de postulación": "Correo",
    "habilidades": [
        "Java",
        "JavaScript",
        "React",
        "Angular"
    ]
}


*/