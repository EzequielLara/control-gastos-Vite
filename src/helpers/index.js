export const generarId = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
}

export const generarFecha = () =>{
    const fecha =new Date();
    const parametrosFecha = {year: 'numeric', month: 'long', day: '2-digit'};
    const datoFecha = fecha.toLocaleDateString('es-ES', parametrosFecha);

    return datoFecha;
}