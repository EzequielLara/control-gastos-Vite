import { useState } from 'react';
import CerrarBtn from '../img/cerrar.svg';
import Mensaje from './Mensaje';

const Modal = ({setModal, animarModal, setAnimarModal, gastos, setGastos}) => {
   
    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidad, setCantidad] = useState();
    const [categoria, setCategoria] = useState('');
    
    const [error, setError] = useState(false);
    const ocultarModal =()=>{
        setAnimarModal(false);
        
        setTimeout(() => {
            setModal(false);
            
        }, 500);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('Botón pulsado');
        if([nombreGasto, cantidad, categoria].includes('')){
            setError(true);
            return;
        }
        setError(false);
        setGastos([...gastos, {
            nombre : nombreGasto,
            cantidad : cantidad,
            categoria : categoria
        }])
        setNombreGasto('');
        setCantidad('');
        setCategoria('')

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
                <legend>Nuevo Gasto</legend>
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
                        onChange= {e=>{setCantidad(e.target.value)}}
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
                        type='submit'
                        value= 'Añadir Gasto'
                    />
                    {error ? (<Mensaje tipo='error'>No se admiten campos vacíos</Mensaje>):''}
            
                </div>
            </form>
        </div>
    );
};

export default Modal;