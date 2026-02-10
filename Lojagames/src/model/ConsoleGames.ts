import { Games } from "./Games";

export class ConsoleGames extends Games{
private _tamanhoDesign : number;

constructor(id:number,titulo:string,preco:number,plataforma:number,tamanhoDesign:number){

super(id,titulo,preco,plataforma)

this._tamanhoDesign =tamanhoDesign;
}


















public visualizar(): void {
 let DesingConsole:string= ''
 
 switch(this._tamanhoDesign){
case 1:
DesingConsole = 'slim'
case 2:
    DesingConsole = 'normal'

 }
 
 
 
    super.visualizar()
    console.log(`o tamanho do design do console é : ${DesingConsole}`)


}

} 