
import { ConsoleGames } from "../model/ConsoleGames";
import { Games } from "../model/Games";
import { PcGames } from "../model/PcGames";
import { repository } from "../repository/repository";
import { Input } from "../util/inputs";
export class controllerGames implements repository{
private jogos = new Array<Games>();
public numero = 0
gerarId(): number {
   return this.numero ++
}

    listaGames(): void {
      for(let x of this.jogos){
     x.visualizar()
      }
    }

    public buscarGame(y:number):Games | null{
        
    let jogoEspecifico = this.jogos.find(x=>x.id ===y)

         return jogoEspecifico || null    
    }


    listarGamesId(x: number): void {
       const buscarjogo = this.buscarGame(x)
       if(buscarjogo !==null){
    
        buscarjogo.visualizar()
       }
    }
    cadastrarGame(x: Games): void {
      this.jogos.push(x)
  
      
    }
    atualizarGame(x: number): void {
     
        let plataformas  = ['pc','console']
        let buscarjogo = this.buscarGame(x)
          let modes = ['tem mode','nao tem mode']
          let designs = ['slim','normal']
        if(buscarjogo!==null){

       let titulo = Input.question("novo titulo")
        let preco = Input.questionFloat("novo preco")
        let plataforma = Input.keyInSelect(plataformas,"",{cancel:false})+1
    
        

            buscarjogo.titulo = titulo
            buscarjogo.preco = preco
            buscarjogo.plataforma = plataforma    
            if (buscarjogo instanceof PcGames){
                          let mode = Input.keyInSelect(modes,"",{calcel:false})+1
                          buscarjogo.mod = mode

            }
             if( buscarjogo instanceof ConsoleGames){
                let design = Input.keyInSelect(designs,"",{cancel:false})+1
                buscarjogo.tamanhoDesign = design
             }






        }

    }
    deletarGame(x: number): void {

this.jogos.filter(y=>y.id !== x)

    }



}