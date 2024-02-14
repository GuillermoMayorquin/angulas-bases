//Injectable es un decorador que le dice a Angular que esto es un servicio
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
//Asi se puede cambiar el nombre de como podemos llamar a la funcion
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name:"Krillin",
      power: 500
    },
    {
      id: uuid(),
      name:"Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 7500
    }
]
  addCharacter( character: Character): void{
    //El spread que son los 3 puntos nos ayuda en este caso a agregar una nueva propiedad a un objeto ya creado sin tener que estar definiendo todas sus propiedades anteriores
    const newCharacter: Character = {id: uuid(), ...character};

    this.characters.push(newCharacter)
  }

  // onDeleteCharacter (index:number):void{
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
