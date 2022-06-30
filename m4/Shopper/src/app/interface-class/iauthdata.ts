import{User} from "./user"
import { Address } from "./address";


export interface ILogIn {
    email: string;
    password: string;
}

export interface ISignUp{
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    address: Address | null;
}

export interface ISignUpResponse{
    accessToken: string;
    user:User
}