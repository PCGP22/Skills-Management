import { useEffect, useState } from "react"
import { Table } from "./components"

function App() {
  
  const [data, setData] = useState([])
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [forceUpdate, setForceUpdate] = useState(false)
  
  useEffect(()=>{
    const url = "https://skills-management.onrender.com/getAllData"
    fetch(url).then(res=>res.json()).then(data=>{setData(data); setResults(data)})
  },[forceUpdate])

  useEffect(()=>{
    setResults(data.filter(d=>d.data.nombre.stringValue.toLowerCase().includes(searchTerm.toLowerCase())))
  },[searchTerm,data])

  function handleChange(e){
    setSearchTerm(e.target.value)
  }

  function handleUpdate(){
    setForceUpdate(!forceUpdate)
  }

  return (
    <>
      <input name="searchBar" className="element searchBar" type="text" placeholder="Buscar por nombre" value={searchTerm} onChange={handleChange}/>
      {results.length > 1 ? <Table results={results} handleUpdate={handleUpdate}/> : <p>No hay datos</p>}
    </>
  )
}

export default App
