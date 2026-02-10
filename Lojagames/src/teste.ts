import { PcGames } from './model/PcGames';

import { controllerGames } from "./controller/controller";
import { ConsoleGames } from './model/ConsoleGames';

function main (){

let testes = new controllerGames()
testes.cadastrarGame(new PcGames ( testes.gerarId(),'godofwar',234,1,1))
testes.cadastrarGame(new ConsoleGames ( testes.gerarId(),'ps5',234,2,2))

testes.listaGames()
testes.atualizarGame(0)
testes.listaGames()
}
main()