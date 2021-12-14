import { useState, useEffect } from 'react';
import CerrarBtn from '../img/cerrar.svg';
import { generarFecha, generarId} from '../helpers'
import Mensaje from './Mensaje';

const Modal = ({setModal, animarModal, setAnimarModal, gastos, setGastos, gastoEditar}) => {
    
    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [id, setId] = useState('');
    
    const [error, setError] = useState(false);
    
    
    
  
    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setNombreGasto(gastoEditar.nombreGasto);
            setCantidad(gastoEditar.cantidad);
            setCategoria(gastoEditar.categoria);
            setId(gastoEditar.id);

        }
    }, [])

    const ocultarModal =()=>{
        setAnimarModal(false);
        
        setTimeout(() => {
            setModal(false);
            
        }, 300);
    };

   

    const guardarGasto = ()=>{
        
        setGastos([...gastos, {
            id : generarId(),
            fecha : generarFecha(),
            nombreGasto,
            cantidad,
            categoria
        
        }])
        

    };

    const resetearFormularioModal = ()=>{

        setNombreGasto('');
        setCantidad('');
        setCategoria('');

    };

    const handleSubmit =(e)=>{

        e.preventDefault();
        console.log('Botón pulsado');

        if([nombreGasto, cantidad, categoria].includes('')){
            setError(true);
            return;
        }
        setError(false);
        guardarGasto();
        resetearFormularioModal();
        ocultarModal();
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img
                    src={CerrarBtn}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>
            <form 
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}
            >
                <legend>{gastoEditar.nombreGasto ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
                <div className='campo'>
                    <label htmlFor='nombre'>Nombre Gasto</label>
                    <input
                        id='nombre'
                        type='text'
                        placeholder='Añade el Nombre del Gasto'
                        value={nombreGasto}
                        onChange= {e=>{setNombreGasto(e.target.value)}}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input
                        type='number'
                        placeholder='Añade cantidad del Gasto'
                        value={cantidad}
                        onChange= {e=>{setCantidad(Number(e.target.value))}}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Categoría</label>
                    <select
                        id='categoria'
                        value={categoria}
                        onChange= {e=>{setCategoria(e.target.value)}}
                    >
                        <option value=''>-- Seleccione --</option>
                        <option value='ahorro'>Ahorro</option>
                        <option value='comida'>Comida</option>
                        <option value='casa'>Casa</option>
                        <option value='gastos'>Gastos Varios</option>
                        <option value='ocio'>Ocio</option>
                        <option value='salud'>Salud</option>
                        <option value='suscripciones'>Suscripciones</option>
                    </select>
                    <input
                        id='boton' 
                        type='submit'
                        value= {gastoEditar.nombreGasto ? 'Guardar cambios' : 'Añadir Gasto'}
                    />
                    {error ? (<Mensaje tipo='error'>No se admiten campos vacíos</Mensaje>):''}
            
                </div>
            </form>
            
        </div>
    );
};

export default Modal;