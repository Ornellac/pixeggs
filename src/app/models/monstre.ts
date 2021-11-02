import { Stat } from './stat';
import { Utilisateur } from './utilisateur';


export interface Monstre{
    PK_Monstre:number;
    NomMonstre:string;
    Exp:number;
    FK_Stat:number;
    FK_Utilisateur:number;
    Stat?:Stat[];
    Utilisateur?:Utilisateur[];
}