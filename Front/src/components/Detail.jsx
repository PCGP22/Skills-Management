import React, { useEffect, useState } from 'react'
import { SkillsList, Message } from "."
import axios from 'axios'

function Detail({visible, handleVisible, data, handleUpdate}) {

    const [dataToSend, setDataToSend] = useState({})
    const [responseMessage, setResponseMessage] = useState("")
    const [messageVisibility, setMessageVisibility] = useState(false)
    
    useEffect(()=>{
        if(data?.data){
            skills = data.data.habilidades.arrayValue.values.map(d=>d.stringValue)
        }
    },[data])

    if(!visible) return
    let skills = data.data.habilidades.arrayValue.values.map(d=>d.stringValue)


    function handleDataSet(skills){
        setDataToSend({
            id: data.id,
            data:{
                habilidades: skills
            }
        })
    }

    function handleMessageVisibility(){
        setMessageVisibility(!messageVisibility)
    }

    function closeMessage(){
        handleMessageVisibility()
        handleVisible()
        handleUpdate()
    }

    async function handleChanges(){
        if("id" in dataToSend){
            const url = "https://skills-management.onrender.com/updateParticipant"
            axios.put(url,dataToSend).then(res=> setResponseMessage(res.data.msg)).finally(handleMessageVisibility)
        }
    }

    return (
        <>
            <div className='cover'>
                <div className='element'>
                    <h3 className='header'>Detalles del participante</h3>
                    <div className='detail-wrapper'>
                        <section>
                            <h3 className='header'>Datos generales</h3>
                            <article>
                                <p><b>Nombre:</b> {data.data.nombre.stringValue}</p>
                                <p><b>Procedencia:</b> {data.data.Procedencia.stringValue}</p>
                                <p><b>Fecha de entrevista:</b> {data.data["Fecha de entrevista"].stringValue}</p>
                                <p><b>Entrevistador:</b> {data.data.Entrevistador.stringValue}</p>
                                <p><b>Medio de postulación:</b> {data.data["Medio de postulación"].stringValue}</p>
                            </article>
                        </section>
                        <section>
                            <h3 className='header'>Habilidades</h3>
                            <SkillsList skills={skills} handleDataSet={handleDataSet}/>
                        </section>
                    </div>
                    <section className='buttonContainer'>
                        <button className='secondaryButton' onClick={handleVisible}>
                            Cerrar detalle
                        </button>
                        <button className='mainButton' onClick={handleChanges}>
                            Guardar cambios
                        </button>
                    </section>
                </div>
            </div>
            <Message visible={messageVisibility} handleVisible={closeMessage} message={responseMessage}/>
        </>
    )
}

export default Detail