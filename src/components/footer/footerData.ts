import { FiCheck } from "react-icons/fi"
import { generateId } from "../../utilities/utilities"
import { TreeViewProps } from "../../types/components"
import cerficadoSeguridad from '../../assets/certificadoSeguridad.svg'
import metodoPago1 from '../../assets/metodoPago1.svg';
import metodoPago2 from '../../assets/metodoPago2.svg';
import metodoPago3 from '../../assets/metodoPago3.svg';
import metodoPago4 from '../../assets/metodoPago4.svg';
import metodoPago5 from '../../assets/metodoPago5.svg';
import metodoPago6 from '../../assets/metodoPago6.svg';
import metodoPago7 from '../../assets/metodoPago7.svg';

export const footerData: TreeViewProps[] = [
    {
        id: generateId(),
        name: 'Informacion Uti',
        listItems: [
            {
                id: generateId(), 
                name: 'Que es tiendamia?'
            },
            {
                id: generateId(),
                name: 'Sell on Tiendamia'
            },
            {
                id: generateId(),
                name: 'Blog'
            },
            {
                id: generateId(),
                name: 'Centro de ayuda en linea'
            },
            {
                id: generateId(),
                name: 'Medio de pago'
            },
            {
                id: generateId(),
                name: 'Terminos y condiciones'
            },
            {
                id: generateId(),
                name: 'Informacion de aduanas'
            },
            {
                id: generateId(),
                name: 'Politicas de devolucion de productos'
            },
            {
                id: generateId(),
                name: 'Marcas'
            }
        ]
    },
    {
        id: generateId(),
        name: 'Centro de Ayuda',
        listItems: [
            {
                id: generateId(),
                name: 'Preguntas frecuentes'
            },
            {
                id: generateId(),
                name: 'Enviar mensaje'
            },
            {
                id: generateId(),
                name: 'Propiedad intelectual'
            },
            {
                id: generateId(),
                name: 'Politica calidad'
            },
            {
                id: generateId(),
                name: 'Visita nuestro centro de ayuda en línea para contactarnos.',
                textColor: 'light'
            },
            {
                id: generateId(),
                name: 'De Lunes a Sábados en el horario de 07:00 a 17:00 hs Domingos de 09:00 a 13:00 hs. *Recuerda ingresar a tu cuenta de Tiendamia para tener una experiencia personalizada y acceder a más información.'
            }
        ]
    },
    {
        id: generateId(),
        name: 'Todo en un solo lugar',
        Icon: FiCheck,
        listItems: [
            {
                id: generateId(),
                name: 'Envio asegurado'
            },
            {
                id: generateId(),
                name: 'Garantia de entrega'
            },
            {
                id: generateId(),
                name: 'Productos originales'
            },
            {
                id: generateId(),
                name: 'El mejor precio'
            },
            {
                id: generateId(),
                name: 'Compra facil, rapido y seguro'
            }
        ]
    },
    {
        id: generateId(),
        name: 'Compra con tranquilidad',
        listItems: [
            {
                id: generateId(),
                name: 'Tiendamia cuenta con los certificados verificados para garantizar la seguridad de la compra.'
            },
            {
                id: generateId(),
                image: cerficadoSeguridad
            }
        ]
    }
]

export const footerDataListPaymentMethod = [
    {   
        id: generateId(),
        image: metodoPago1,
        alt: 'Metodo de pago visa'
    },
    {   
        id: generateId(),
        image: metodoPago2,
        alt: 'Metodo de pago visa'
    },
    {   
        id: generateId(),
        image: metodoPago3,
        alt: 'Metodo de pago visa'
    },
    {   
        id: generateId(),
        image: metodoPago4,
        alt: 'Metodo de pago visa'
    },
    {   
        id: generateId(),
        image: metodoPago5,
        alt: 'Metodo de pago visa'
    },
    {   
        id: generateId(),
        image: metodoPago6,
        alt: 'Metodo de pago visa'
    },
    {   
        id: generateId(),
        image: metodoPago7,
        alt: 'Metodo de pago visa'
    }
]