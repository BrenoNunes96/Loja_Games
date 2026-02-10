import { Games } from "./Games";

export class PcGames extends Games{
private _mod : number;

constructor(id:number,titulo:string,preco:number,plataforma:number,mod:number){

super(id,titulo,preco,plataforma)

this._mod = mod;
}


    /**
     * Getter mod
     * @return {number}
     */
	public get mod(): number {
		return this._mod;
	}

    /**
     * Setter mod
     * @param {number} value
     */
	public set mod(value: number) {
		this._mod = value;
	}


















public visualizar(): void {
 let modInstalado:string= ''
 console.log(this._mod)
 
 switch(this._mod){
case 1:
modInstalado = 'sim'
break
case 2:
    modInstalado ='nao'
break
default :
console.log('invalido')
 }
 
 
 
    super.visualizar()
    console.log(`o mod esta instalado ? ${modInstalado}`)


}

} 