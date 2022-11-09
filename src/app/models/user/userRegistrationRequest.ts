import { Role } from "./role";

export interface UserRegistrationRequest{
    username : string,
    email : string,
    phoneNumber : string,
    password : string,
    address : string,
    role : Role
}