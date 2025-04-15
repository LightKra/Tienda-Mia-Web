import React from "react";
import { Product } from "./models";
import { User } from "./models";
import { IconType } from "react-icons";

export type Size = 'medium' | 'large' | 'full' | 'auto';

export type ButtonRedProps = {
    textButton: string,
    size?: Size,
    Icon?: IconType,
    backgroundColor?: 'red' | 'white',
    border?: 'rounded' | 'square',
    onClick?: ()=>void,
    className?: string
}
export type ButtonSelectProps = {
    listOptions: string[];
    className?: string
}
export type ButtonTransparentProps = {
    textButton: string,
    image: string,
    onClick?: ()=> void,
    className?: string
}
export type CartProps = {
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
    onClick: ()=> void
}

export type ListProductProps = {
    products: Product[]
}

export type TitleSectionProps = {
    title: string
}

export type LabelProps = {
    name: string,
    textColor: 'white' | 'green',
    backgroundColor: 'green' | 'red',
    border: 'normal' | 'rounded',
    className?: string
}
type SubSubMenuCategoriesItemLinks = {
    id: string,
    name: string
}
export type SubSubMenuCategoriesItem = {
    id: string,
    name: string,
    list: SubSubMenuCategoriesItemLinks[]
}
export type SubMenuCategoriesItem = {
    id: string,
    name: string,
    link?: string,
    Icon?: React.FC<LabelProps>,
    list?: SubSubMenuCategoriesItem[]
}
export type SubMenuCategoriesList = SubMenuCategoriesItem[];

export type SearchProps = {className?: string}

export type ListSubItemsCategoriesProps = {
    isHover: boolean,   
} & SubMenuCategoriesItem

export type ItemSlider = {
    id: number,
    image: string
}
export type SliderProps ={
    listImages: ItemSlider[]
}
export type ButtonLinkProps = {
    textButton: string,
    link: string,
    className?: string
}

export type CardProductProps = {
    id: string,
    image: string,
    imageDescription: string,
    title: string,
    price: number,
    priceDiscounted: number,
    isShipment: boolean,
    nameBank: string,
    size?: Size
}
export type InputProps = {
    placeHolder?: string,
    size?: Size,
    handlerChange?: (event: React.ChangeEvent<HTMLInputElement>)=>void,
    className?: string,
}
export type TreeViewProps = {
    id?: string,
    size?: Size,
    Icon?: IconType,
    name: string,
    listItems: {id: string, name?: string, image?: string, textColor?: 'normal' | 'light'}[],
    className?: string
}

export type SliderProductsProps = {
    listItem: CardProductProps[]
}

export type CardProps = {
    size?: Size,
    children: React.ReactNode,
    className?: string
}

export type CardProductV2Props = {
    discount: number,
    title: string,
    image: string,
    alt: string,
    size?: Size,
    textButton: string,
    className?: string   
}
export type cardProductV3Props = {
    image: string,
    alt: string,
    title: string,
    textButton: string,
    size?: Size,
    className?: string
}
export type ListCardProductV1Props = {
    listItem: Array<CardProductV2Props & {id: string, type: 'v2'} | cardProductV3Props & {id: string, type: 'v3'}> 
}

export type ListPaymentMethodIconProps = {
    listImages: {id: string, image: string, alt: string}[],
    className?: string
}