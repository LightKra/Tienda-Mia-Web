import { Label } from "../label/label";
import { SubMenuCategoriesList } from "../../types/components";
import { generateId } from "../../utilities/utilities";

export const categories: SubMenuCategoriesList = [
    {
        id: generateId(),
        name: 'Oulet Total',
        link: '#',
        Icon: Label
    },
    {
        id: generateId(),
        name: 'Tecnologia renovada',
        link: '#',
        Icon: Label
    },
    {
        id: generateId(),
        name: 'Tecnologia',
        list: [
            {
                id: generateId(),
                name: 'Tecnologia',
                list: [
                    {id: generateId(), name: 'Laptops'},
                    {id: generateId(), name: 'Celulares nuevos'},
                    {id: generateId(), name: 'Audifonos'}
                ]
            },
            {
                id: generateId(),
                name: 'Accesorios',
                list: [
                    {id: generateId(), name: 'Cables y accesorios'},
                    {id: generateId(), name: 'Tablets'},
                    {id: generateId(), name: 'Parlantes'},
                    {id: generateId(), name: 'Tecnologia renovada'}
                ]
            }
        ]
    },
    {
        id: generateId(),
        name: 'Zapatos',
        list: [
            {
                id: generateId(),
                name: 'Hombres',
                list: [
                    {id: generateId(), name: 'Hombre'},
                    {id: generateId(), name: 'Deportivo'},
                    {id: generateId(), name: 'Formal'}
                ]
            },
            {
                id: generateId(),
                name: 'Mujer',
                list: [
                    {id: generateId(), name: 'Casual'},
                    {id: generateId(), name: 'Deportivo'},
                    {id: generateId(), name: 'Formal'}
                ]
            },
            {
                id: generateId(),
                name: 'Infantil',
                list: [
                    {id: generateId(), name: 'Niño'},
                    {id: generateId(), name: 'Niña'}
                ]
            }
        ]
    },
    {
        id: generateId(),
        name: 'Perfumes',
        list: [
             {
                id: generateId(),
                name: 'Perfumes',
                list: [
                    {id: generateId(), name: 'Hombre'},
                    {id: generateId(), name: 'Mujer'},
                    {id: generateId(), name: 'Unisex'},
                    {id: generateId(), name: 'Niño'},
                    {id: generateId(), name: 'Niña'}
                ]
             }
        ]
    },
    {
        id: generateId(),
        name: 'Ropa y accesorios',
        list: [
            {
                id: generateId(),
                name: 'Ropa y Accesorios',
                list: [
                    {id: generateId(), name: 'Camisas'},
                    {id: generateId(), name: 'Camisetas'},
                    {id: generateId(), name: 'Polos'},
                    {id: generateId(), name: 'Blazers y Chaquetas'},
                    {id: generateId(),name: 'Chompas'},
                    {id: generateId(), name: 'Jeans'},
                    {id: generateId(), name: 'Pantalones'},
                    {id: generateId(), name: 'Pijamas'},
                    {id: generateId(), name: 'Ropa Deportiva'},
                    {id: generateId(), name: 'Ropa Interior'},
                    {id: generateId(), name: 'Shorts y Bermudas'},
                    {id: generateId(), name: 'Sweaters'},
                    {id: generateId(), name: 'Trajes'},
                    {id: generateId(), name: 'Trajes de Baño'},
                    {id: generateId(), name: 'Zapatos'}
                ]
            },
            {
                id: generateId(),
                name: 'Mujer',
                list: [
                    {id: generateId(), name: 'Camisetas Blusas'},
                    {id: generateId(), name: 'Camisas'},
                    {id: generateId(), name: 'Vestidos'},
                    {id: generateId(), name: 'Enterizos'},
                    {id: generateId(), name: 'Faldas'},
                    {id: generateId(), name: 'Blazers y Chaquetas'},
                    {id: generateId(), name: 'Chompas'},
                    {id: generateId(), name: 'Jeans'},
                    {id: generateId(), name: 'Pantalones'},
                    {id: generateId(), name: 'Pijamas',},
                    {id: generateId(), name: 'Ropa Deportiva'},
                    {id: generateId(), name: 'Ropa Interior'},
                    {id: generateId(), name: 'Shorts'},
                    {id: generateId(), name: 'Sweaters'},
                    {id: generateId(), name: 'Trajes'},
                    {id: generateId(), name: 'Trajes de Baño'},
                    {id: generateId(), name: 'Vestidos'},
                    {id: generateId(), name: 'Calzado'}
                ]
            },
            {
                id: generateId(),
                name: 'Infantil',
                list: [
                    {id: generateId(), name: 'Casual'},
                    {id: generateId(), name: 'Deportivo'},
                    {id: generateId(), name: 'Formal'}
                ]
            },
            {
                id: generateId(),
                name: 'Accesorios',
                list: [
                    {id: generateId(), name: 'Relojes'},
                    {id: generateId(), name: 'Bisuteria'},
                    {id: generateId(), name: 'Gafas de sol'},
                    {id: generateId(), name: 'Bolsos y Mochilas'}
                ]
            }
        ]
    },
    {
        id: generateId(),
        name: 'Salud y deporte',
        list: [
            {
                id: generateId(),
                name: 'Ropa Deportiva',
                list: [
                    {id: generateId(), name: 'Hombre'},
                    {id: generateId(), name: 'Mujer'}
                ]
            },
            {
                id: generateId(),
                name: 'Vitaminas',
                list: [
                    {id: generateId(), name: 'Hombre'},
                    {id: generateId(), name: 'Mujer'},
                    {id: generateId(), name: 'Niños'}
                ]
            },
            {
                id: generateId(),
                name: 'Suplementos',
                list: [
                    {id: generateId(), name: 'Proteinas'},
                    {id: generateId(), name: 'Creatinas'}
                ]
            },
            {
                id: generateId(),
                name: 'Deportes',
                list: [
                    {id: generateId(), name: 'Padel'},
                    {id: generateId(), name: 'Tennis'},
                    {id: generateId(), name: 'Futbol'},
                    {id: generateId(), name: 'Basquet'},
                    {id: generateId(), name: 'Basquet'}
                ]
            }
        ]
    },
    {
        id: generateId(),
        name: 'Hogar y jardin',
        list: [
            {
                id: generateId(),
                name: 'Hogar y Jardin',
                list: [
                    {id: generateId(), name: 'Decoracion'},
                    {id: generateId(), name: 'Dormitorio'},
                    {id: generateId(), name: 'Baño'},
                    {id: generateId(), name: 'Jardin'},
                    {id: generateId(), name: 'Smart Home'},
                    {id: generateId(), name: 'Mascotas'},
                    {id: generateId(), name: 'Iluminacion'}
                ]
            }
        ]
    },
    {
        id: generateId(),
        name: 'Infantil y juguetes',
        list: [
            {
                id: generateId(),
                name: 'Ropa',
                list: [
                    {id: generateId(), name: 'Niño'},
                    {id: generateId(), name: 'Niña'}
                ] 
            },
            {
                id: generateId(),
                name: 'Bebe',
                list: [
                    {id: generateId(), name: 'Ropa'}
                ]
            }
        ]
    },
    {
        id: generateId(),
        name: 'Repuestos',
        list: [
            {
                id: generateId(),
                name: 'Repuestos',
                list: [
                    {id: generateId(), name: 'Respuestos de carro'},
                    {id: generateId(), name: 'Respuestos de Moto'}
                ]
            },
            {
                id: generateId(),
                name: 'Accesorios',
                list: [
                    {id: generateId(), name: 'Accesorios'},
                    {id: generateId(), name: 'Car Play'}
                ]
            }
        ]
    }
]