class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  _saldo = 0;

  get agencia() {
    return this.agencia;
  }

  set agencia(agencia) {
    if (typeof agencia != "number") return;

    this.agencia = agencia;
  }

  get saldo() {
    return this._saldo;
  }

  constructor(agencia) {
    this.agencia = agencia || 1001;
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valorASerSacado) {
    if (valorASerSacado <= 0) return;

    if (this._saldo < valorASerSacado) {
      console.log("Voce nao possui saldo o suficiente");
      return;
    }
    this._saldo -= valorASerSacado;
    console.log("seu novo saldo é " + this._saldo);
    return valorASerSacado;
  }
  depositar(valorASerDepositado) {
    if (valorASerDepositado <= 0) {
      return;
    }
    this._saldo += valorASerDepositado;
    return valorASerDepositado;
  }

  transferir(valorASerTransferido, contaParaTransferir) {
    const valorSacado = this.sacar(valorASerTransferido);
    if (!valorSacado) {
      console.log("erro ao sacar da conta");
      return;
    }
    contaParaTransferir.depositar(valorSacado);
  }
}

export default ContaCorrente;
