export abstract class DioAccount { //para gerar herança
    private name: string
    private readonly accountNumber: number;
    private balance: number = 1500
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
        }

        setName = (name: string): void => {
            this.name = name
            console.log('Nome alterado com sucesso')
        }

        getName = (): string => {
            return this.name
        }

        setBalance = (balance: number) => {
            this.balance = balance
        }

        setAccountNumber = () => {
            this.accountNumber
        }
    
        deposit = (deposito: number): void => {
            if(this.validateStatus()) {
                this.balance += deposito
                console.log(`Você depositou R$ ${deposito.toFixed(2)}.\n
                    seu saldo atual é ${this.balance.toFixed(2)}`)
            }
        } 

        withdraw = (saque: number): void => {
            if (this.validateStatus() && this.balance >= saque) {
                this.balance -= saque;
                console.log(`Você sacou R$ ${saque},00. Saldo restante: R$ ${this.balance}`);
            } else if (this.validateStatus() && this.balance < saque) {
                console.log("Saldo insuficiente para realizar o saque.");
            }
            
        }

        getBalance = (): number => {
            return this.balance
        }

        validateStatus = (): boolean =>{
            if (this.status){
                return this.status
            }

           throw new Error('Conta inválida')
        }

}