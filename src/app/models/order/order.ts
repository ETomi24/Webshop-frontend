export interface Order {
    id : number;
    totalPrice : number;
    creationDate : Date;
    deliveryDate : Date;
    status : Status;
    userId : string;
}

export enum Status{
    IN_PROGRESS = 0,
    FINISHED = 1,
}