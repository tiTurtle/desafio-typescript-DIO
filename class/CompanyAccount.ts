import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    constructor (name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (loan: number)=> {
        if (this.validateStatus()) {
            this.setBalance(this.getBalance() + loan); // Atualiza o saldo
            console.log(`Você pegou empréstimo de R$${loan.toFixed(2)}. \nSeu saldo atual é de R$${this.getBalance().toFixed(2)}`);
          } else {
            console.error("Conta inválida");
          }
    }

}