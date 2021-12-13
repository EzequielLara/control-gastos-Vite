import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
    ahorro : IconoAhorro,
    comida : IconoComida,
    casa : IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones

}

const Gasto = ({gasto}) => {
    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img 
                    src={diccionarioIconos[gasto.categoria]}
                    alt='imagen de categoria'
                />
                <div className="descripcion-gasto">
                    <p className="categoria">{gasto.categoria}</p>
                    <p className="nombre-gasto">{gasto.nombreGasto}</p>
                    <p className="fecha-gasto">Agregado el: {''}<span>{gasto.fecha}</span></p>
                </div>
            </div>
                <p className="cantidad-gasto">${gasto.cantidad}</p>
        </div>
    );
};

export default Gasto;