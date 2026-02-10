
import { controllerGames } from "./src/controller/controller";
import { ConsoleGames } from "./src/model/ConsoleGames";
import { PcGames } from "./src/model/PcGames";
import { Input } from "./src/util/inputs";

export  function Main (){
let controller = new controllerGames()
while(true){
    console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                  GAMESFY              ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar jogo                          ");
        console.log("            2 - Listar todas os jogos               ");
        console.log("            3 - Buscar jogo por id             ");
        console.log("            4 - Atualizar Dados do jogo          ");
        console.log("            5 - Apagar jogo                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
let opcao = Input.questionInt("digite uma opcao")
    

switch(opcao){
case 1:
    criarJogo()
    keyPress()
      break
case 2:
    controller.listaGames()
    keyPress()
      break

case 3:
   let x = Input.questionInt('digite o ID do jogo a buscar')
    controller.listarGamesId(x)
    keyPress()
  break
case 4:
    let plataformas =['pc','console']
    let y = Input.questionInt('Qual id do jogo a ser atualizado ?')
 
  controller.atualizarGame(y)
    keyPress()
      break

case 5:
        let z= Input.questionInt('Qual id do jogo a ser apagado ?')
  controller.deletarGame(z)
    keyPress()
      break
    case 6:
        sobre()
        break
    default:
console.log('invalido')
break

}



}

function keyPress(){
console.log('aperte enter para prosseguir')
    Input.prompt()

}
function sobre(){
 console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Breno Nunes de Almeida");
    console.log("Generation Brasil - brenogenerationa@generation.org");
    console.log("github.com/BrenoNunes96");
    console.log("*****************************************************")

}


function criarJogo(){
 let plataformas = ['pc','console']
 let mode = ['tem mod','nao tem mod']
let designs = ['slim','normal']
let titulo = Input.question("qual nome do game ?")
let preco = Input.questionInt('digite o preco')
let plataforma = Input.keyInSelect(plataformas,"",{cancel:false})+1


switch(plataforma){
    case 1:
        let mod = Input.keyInSelect(mode,"",{cancel:false})+1
 controller.cadastrarGame(new PcGames(controller.gerarId(),titulo,preco,plataforma,mod))  
 break 
case 2:
    let design = Input.keyInSelect(designs,"",{cancel:false})+1
    controller.cadastrarGame(new ConsoleGames(controller.gerarId(),titulo,preco,plataforma,design))
break
default:
    console.log('invalido ')
}

}
}
Main()