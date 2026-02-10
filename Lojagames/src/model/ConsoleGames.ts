import { Games } from "./Games";

export class ConsoleGames extends Games{
private _tamanhoDesign : number;

constructor(id:number,titulo:string,preco:number,plataforma:number,tamanhoDesign:number){

super(id,titulo,preco,plataforma)
this._tamanhoDesign =tamanhoDesign
}


    /**
     * Getter tamanhoDesign
     * @return {number}
     */
	public get tamanhoDesign(): number {
		return this._tamanhoDesign;
	}

    /**
     * Setter tamanhoDesign
     * @param {number} value
     */
	public set tamanhoDesign(value: number) {
		this._tamanhoDesign = value;
	}
   











public visualizar(): void {
 let DesingConsole:string= ''
 
 switch(this._tamanhoDesign){
case 1:
DesingConsole = 'slim'
break
case 2:
    DesingConsole = 'normal'
break
default:
    console.log('invalido')
 }
 
 
 
    super.visualizar()
    console.log(`o tamanho do design do console é : ${DesingConsole}`)

}}