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
 
 switch(this._mod){
case 1:
modInstalado = 'sim'
case 2:
    modInstalado ='nao'

 }
 
 
 
    super.visualizar()
    console.log(`o mod esta instalado ? : ${modInstalado}`)


}

} 