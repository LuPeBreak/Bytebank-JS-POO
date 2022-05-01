import ContaCorrente from "./ContaCorrente.js";

class Cliente {
  nome;
  _cpf;
  _contaCorrente;

  get nome(){
    return this.nome;
  }

  set nome(nome){
    if(typeof nome != "string") return

    this.nome = nome;
  }

  get cpf(){
    return this._cpf;
  }

  set contaCorrente(contaCorrente) {
    if (contaCorrente instanceof ContaCorrente) {
      this._contaCorrente = contaCorrente;
    }
  }

  get contaCorrente() {
    return this._contaCorrente;
  }


  constructor(nome, cpf, agencia) {
    this.nome = nome;
    this._cpf = cpf;
    this.contaCorrente = new ContaCorrente(agencia);
  }
}

export default Cliente;
