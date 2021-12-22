import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({setIsValidPresupuesto, gastos, setGastos, presupuesto, setPresupuesto}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    
    useEffect(()=>{
        const totalGastado = gastos.reduce((total, gasto)=>gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado
      
      //Calcular porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible)/presupuesto) * 100).toFixed(2);
        
      
        setGastado(totalGastado);
        setDisponible(totalDisponible);

        setTimeout(()=>setPorcentaje(nuevoPorcentaje), 1000);

    }, [gastos])

    const formatearCantidad = (cantidad) =>{
        
        return cantidad.toLocaleString('en-US', { style: 'currency',
        currency: 'USD'})
    }

    const reset = () =>{
     
        setGastos([]);
        setPresupuesto('');
        setIsValidPresupuesto(false);
        
        console.log('Reseteando gastos')

    }
    
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                            styles ={buildStyles({
                                pathColor: porcentaje > 100 ? '#DC2626': '#3B82F6',
                                trailcolor:'#F5F5F5',
                                textColor: porcentaje > 100 ? '#DC2626': '#3B82F6'
                            })}
                            value={porcentaje}
                            text={`Gastado: ${porcentaje}%`}
                />
            </div>
            
            <div className='contenido-presupuesto'>
                <button
                    className='reset-app'
                    type= 'button'
                    onClick={()=>reset()}
                
                >Reiniciar Presupuesto</button>
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(Number(presupuesto))}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : '' }`}>
                    <span>Disponible: </span> {formatearCantidad(Number(disponible))}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(Number(gastado))}
                </p>
            </div>
            
        </div>
    );
};

export default ControlPresupuesto;