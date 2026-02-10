export abstract class Games{
private _id : number;
private _titulo :string;
private _preco: number;
private _plataforma : number;

  
 
    

constructor(id:number,titulo:string,preco:number,plataforma:number ){

this._id = id;

this._titulo = titulo;
this._preco = preco;
this._plataforma = plataforma;



 
}
 
public visualizar ():void{
    
    let plataforma : string = ''
    switch(this._plataforma){
case 1:
    plataforma ='PC'
    break
case 2:
    plataforma = 'CONSOLE'
break
default:
    console.log('invalido')
    }
    
console.log(`\n**********************************************`)
console.log(`DADOS DO JOGO`)
console.log(`**********************************************`)
console.log(`Id do game${this._id}`)
console.log(`titulo do game ${this._titulo}`)
console.log(`preco do jogo ${this._preco}`)
console.log(`a plataforma é ${plataforma}`)

}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter titulo
     * @return {string}
     */
	public get titulo(): string {
		return this._titulo;
	}

    /**
     * Getter preco
     * @return {number}
     */
	public get preco(): number {
		return this._preco;
	}

    /**
     * Getter plataforma
     * @return {number}
     */
	public get plataforma(): number {
		return this._plataforma;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter titulo
     * @param {string} value
     */
	public set titulo(value: string) {
		this._titulo = value;
	}

    /**
     * Setter preco
     * @param {number} value
     */
	public set preco(value: number) {
		this._preco = value;
	}

    /**
     * Setter plataforma
     * @param {number} value
     */
	public set plataforma(value: number) {
		this._plataforma = value;
	}




}