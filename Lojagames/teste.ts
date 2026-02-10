import { Games } from './src/model/Games';
import { repository } from './src/repository/repository';
export class teste implements repository{
listarGamesId(x: number): void {
    throw new Error('Method not implemented.');
}
cadastrarGame(x: Games): void {
    throw new Error('Method not implemented.');
}
atualizarGame(x: number): void {
    throw new Error('Method not implemented.');
}
deletarGame(x: number): void {
    throw new Error('Method not implemented.');
}
private   jogos = new Array<Games>()
listaGames(): void {
for(let x of this.jogos){
x.visualizar()


}


}


}