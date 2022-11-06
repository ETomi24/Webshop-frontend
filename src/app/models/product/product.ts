import { Category } from "../category/category";


export interface Product{
    id? : number;
    description? : string;
    price? : number;
    quantity? : number;
    name? : string;
    category? : Category;
    picture? : string;
}