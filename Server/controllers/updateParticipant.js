const {db} = require("../FireBase")
const {doc,updateDoc} = require("firebase/firestore")

async function updateParticipant(req,res){
    try{
        const data = req.body
        const participantRef = doc(db,"participants",data.id)
        await updateDoc(participantRef,data.data)
        res.send({msg: "Participante actualizado exitosamente"})
    }
    catch(e){
        console.log(e)
        res.status(500).send({msg:"Hubo un error al actualizar los datos", err:e})
    }
}

module.exports = {updateParticipant}

/*
Notas: el archivo de actualización debe tener el siguiente formato:
{
    "id": "9OTV29rAlaEpe1Eor8TQ", //ID del documento
    "data": {
        "habilidades": [
            "Java",
            "Java",
            "Java",
            "Java"
        ]
    }
} 
*/