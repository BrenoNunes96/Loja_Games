export abstract class Games{
private _id : number;
private _titulo :string;
private _preco: number;
private _plataforma : number;

  
 
    

constructor(id:number,titulo:string,preco:number,plataforma:number  ){

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
case 2:
    plataforma = 'CONSOLE'
    }

console.log(`\n**********************************************`)
console.log(`DADOS DO JOGO`)
console.log(`**********************************************`)
console.log(`Id do game${this._id}`)
console.log(`titulo do game ${this._titulo}`)
console.log(`preco do jogo ${this._preco}`)
console.log(`a plataforma é ${this._plataforma}`)

}
}