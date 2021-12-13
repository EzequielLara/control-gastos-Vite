import React from 'react';
import ControlPresupuesto from './ControlPresupuesto';
import NuevoPresupuesto from './NuevoPresupuesto';

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos}) => {
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
            ):(
                <ControlPresupuesto
                    gastos={gastos}
                    presupuesto={presupuesto}
                />           
              )
            }
        </header>
    );
};

export default Header;