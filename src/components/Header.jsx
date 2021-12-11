import React from 'react';
import NuevoPresupuesto from './NuevoPresupuesto';

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {!isValidPresupuesto ? ( 
            <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    isValidPresupuesto= {isValidPresupuesto}
                    setIsValidPresupuesto ={setIsValidPresupuesto}
             />
            ):(<p>Control de Presupuesto</p>)
            }
        </header>
    );
};

export default Header;