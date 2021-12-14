import Gasto from './Gasto'

const ListadoGastos = ({gastos, setGastoEditar}) => {
    return (
        <>
            <div className='listado-gastos contenedor'>
                <h2>{gastos.length ? 
                gastos.map(gasto =>
                    <Gasto
                        key = {gasto.id}
                        gasto ={gasto}
                        setGastoEditar ={setGastoEditar}

                    /> )
                : 'No hay Gastos aún'}
                </h2>
            </div>
        </>
    );
};

export default ListadoGastos;