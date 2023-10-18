
function Eightball({object, handleClick }){
    
return (
    <div className="eight-ball" style={{backgroundColor: object.color}} onClick={handleClick}>
       <h1 className="text">{object.msg}</h1>
    </div>
)

}

export default Eightball