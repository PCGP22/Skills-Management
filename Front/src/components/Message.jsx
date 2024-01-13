function Message({visible, handleVisible, message}) {
    if(!visible) return
  return (
    <div className='cover'>
        <div className="element messageBox">
            <h3 className="header">Mensaje</h3>
            <p>{message}</p>
            <button className="mainButton" onClick={handleVisible}>
                Cerrar
            </button>
        </div>
    </div>
  )
}

export default Message