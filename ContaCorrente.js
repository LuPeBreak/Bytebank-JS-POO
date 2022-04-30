class ContaCorrente {
  agencia;
  _saldo = 0;
  constructor(agencia) {
    this.agencia = agencia || 1001;
  }

  saque(valorASerSacado) {
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
}

export default ContaCorrente;