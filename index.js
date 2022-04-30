import Cliente from "./Cliente";

const luis = new Cliente("Luis", 11122233344);
const sarah = new Cliente("Sarah", 22211144433);

luis.contaCorrente.depositar(200);
luis.contaCorrente.saque(200); //deve aceitar
luis.contaCorrente.saque(200); //deve dar erro porque nao temos saldo
