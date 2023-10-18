
function Eightball({object}){
    
return (
    <div className="eight-ball" style={{backgroundColor: object.color}}>
       <h1 className="text">{object.msg}</h1>
    </div>
)

}

export default Eightball