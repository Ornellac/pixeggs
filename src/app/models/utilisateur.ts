import { Monstre } from "./monstre";
import { Stat } from "./stat";

export interface Utilisateur{
    PK_Utilisateur:number;
    Nom:string;
    Prenom:string;
    DateNaiss:Date;
    Email:string;
    Password:string;
    Pseudo:string;
    Monstre?:Monstre[]
    Stat?:Stat[]
}