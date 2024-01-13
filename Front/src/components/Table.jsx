import { useState } from 'react'
import { Detail } from "."

function Table({results, handleUpdate}) {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({})

  function handleVisible(){
    setVisible(!visible)
  }

  function handleClick(data){
    setData(data)
    handleVisible()
  }

  return (
    <div className='table-wrapper shadowed'>
        <table className='element'>
            <thead>
                <tr>
                    <th> Nombre </th>
                    <th className='disappear'> Entrevista </th>
                    <th className='disappear'> Procedencia </th>
                    <th> Editar</th>
                </tr>
            </thead>
            <tbody>
                {results.map(r=>{
                    return(
                        <tr key={r.id}>
                            <td>{r.data.nombre.stringValue}</td>
                            <td className='disappear'>{r.data["Fecha de entrevista"].stringValue}</td>
                            <td className='disappear'>{r.data.Procedencia.stringValue}</td>
                            <td>
                                <button className='mainButton' onClick={()=>handleClick(r)}>
                                    Detalles
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <Detail 
            visible={visible}
            handleVisible={handleVisible}
            data={data}
            handleUpdate={handleUpdate}
        />
    </div>
  )
}

export default Table