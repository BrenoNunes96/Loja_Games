import { Games } from "../model/Games"

export interface repository{
listaGames():void
listarGamesId(x:number):void
cadastrarGame(x:Games):void
atualizarGame(x:number,y:number):void
deletarGame(x:number):void
gerarId():number

}
