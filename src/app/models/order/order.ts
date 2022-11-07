export interface Order {
    id : number;
    totalPrice : number;
    creationDate : Date;
    deliveryDate : Date;
    status : Status;
    userId : string;
}

export enum Status{
    In_Progress = 0,
    Finished = 1,
}