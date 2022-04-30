import Cliente from "./Cliente.js";

const luis = new Cliente("Luis", 11122233344);
const sarah = new Cliente("Sarah", 22211144433);

luis.contaCorrente.depositar(200);
luis.contaCorrente.sacar(200); //deve aceitar
luis.contaCorrente.sacar(200); //deve dar erro porque nao temos saldo
luis.contaCorrente.depositar(200);
luis.contaCorrente.transferir(100, sarah.contaCorrente);
console.log(luis)
console.log(sarah)
