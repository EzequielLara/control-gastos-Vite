

const Gasto = ({gasto}) => {
    return (
        <div>
        
                <div>
                    <p>Id: {gasto.id}</p>
                    <p>Nombre: {gasto.nombreGasto}</p>
                    <p>Cantidad: {gasto.cantidad}</p>
                    <p>Categoria: {gasto.categoria}</p>
                </div>
                <button>Modificar</button>
                <button type='button'>Eliminar</button>
        </div>
    );
};

export default Gasto;