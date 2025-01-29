import { Product } from "./models";
import { User } from "./models";

export type ButtonRedProps = {
    textButton: string,
    handlerClick: ()=>void,
    className?: string
}
export type ButtonSelectProps = {
    listOptions: string[];
    className: string
}
export type ButtonTransparentProps = {
    textButton: string,
    image: string,
    handlerClick: ()=> void
}
export type CardProps = {
    listProducts: Product[]
}

export type MenuMovilSubList = {
    name: string,
    link: string
}

export type MenuMovilItemProps = {
    name: string,
    list: MenuMovilSubList[],
    Icon: React.ReactNode
}

export type MenuMovilProps = {
    listMenu: MenuMovilItemProps[],
    user: User | undefined,
    stateSideMenu: boolean,
    handlerClick: () => void
}
export type SearchWindowProps = {
    listMenu: Product[]
}
export type ButtonMainProps = {
    textButton: string,
    handlerClick: ()=> void
}
export type CardProductProps = {
    name: string,
    description: string,
    image: string
}

export type ListProductProps = {
    products: Product[]
}

export type TitleSectionProps = {
    title: string
}

export type SearchProps = {className: string}