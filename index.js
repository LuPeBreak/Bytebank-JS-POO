import Cliente from "./Cliente.js";
import ContaCorrente from "./ContaCorrente.js";

const luis = new Cliente("Luis", 11122233344);
const sarah = new Cliente("Sarah", 22211144433);

luis.contaCorrente.depositar(200);
// luis._contaCorrente.sacar(200); //deve aceitar
// luis._contaCorrente.sacar(200); //deve dar erro porque nao temos saldo
luis.contaCorrente.depositar(200);
luis.contaCorrente.transferir(100, sarah._contaCorrente);
console.log(luis);
console.log(sarah);
console.log(ContaCorrente.numeroDeContas);
