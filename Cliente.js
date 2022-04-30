import ContaCorrente from "./ContaCorrente.js";

class Cliente {
  constructor(nome, cpf, agencia) {
    this.nome = nome;
    this.cpf = cpf;
    this.contaCorrente = new ContaCorrente(agencia);
  }
}

export default Cliente;
