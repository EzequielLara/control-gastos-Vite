import Gasto from './Gasto'

const ListadoGastos = (
    { gastos, 
      setGastoEditar, 
      eliminarGasto,
      filtro,
      gastosFiltrados
    }) => {
    return (
        <>
            <div className='listado-gastos contenedor'>
                <div>
                
                { filtro ? ( 
                    <>
                        <h2>{gastosFiltrados.length ? `Gastos de ${filtro}`  : `No existen Gastos en la categoria ${filtro} para filtrar`}</h2>
                        {gastosFiltrados && ( gastosFiltrados.map(gasto =>
                        <Gasto
                            key = {gasto.id}
                            gasto ={gasto}
                            setGastoEditar ={setGastoEditar}
                            eliminarGasto={eliminarGasto}

                        /> )
                   
                    )}</>) : (
                gastos.length ? 
                gastos.map(gasto =>
                    <Gasto
                        key = {gasto.id}
                        gasto ={gasto}
                        setGastoEditar ={setGastoEditar}
                        eliminarGasto={eliminarGasto}

                    /> )
                : 'No hay Gastos'
                )}
                </div>
                
            </div>
        </>
    );
};

export default ListadoGastos;