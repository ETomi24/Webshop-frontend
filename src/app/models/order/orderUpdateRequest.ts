import { Status } from "./order";

export interface OrderUpdateRequest {
    id : number;
    totalPrice : number;
    creationDate : Date;
    completeDate : Date;
    status : Status;
    userId : string; 
}