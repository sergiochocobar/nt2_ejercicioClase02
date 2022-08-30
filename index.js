const condiciones = [
    {condicion:"debe haber pelota",valor:true},
    {condicion:"equipo 1 debe tener 11 jugadores",valor:true},
    {condicion:"equipo 2 debe tener 11 jugadores",valor:false},
    {condicion:"todos los jugadores deben estar anotados",valor:true},
    {condicion:"las condiciones climaticas deben ser buenas",valor:false}
]

condiciones.forEach(elemento =>{
    if (elemento.valor == false) {
       console.log(`El partido no puede comenzar porque no se cumple la siguiente condicion: ${elemento.condicion}`) 
    }
});