import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {
    constructor (name: string, accountNumber: number) {
        super(name, accountNumber, )
    }

    withdrawStudent = (deposito: number): void => {
        if (this.validateStatus()) {
            const totalDeposito = deposito + 10; // taxa de R$10
            this.deposit(totalDeposito);
            console.log(`Você depositou R$ ${deposito},00 com taxa de R$ 10,00. Saldo atual: R$ ${this.getBalance()}`);
        }

        }}