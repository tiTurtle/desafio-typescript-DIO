//Dio Banking

//name, accountNumber
//depoistar, sacar

import { CompanyAccount } from './class/CompanyAccount'
/* import {DioAccount} from './class/DioAccount' */
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'

 const peopleAccount:  PeopleAccount = new PeopleAccount(1, 'Matheus', 10) 
console.log(peopleAccount)


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)


const novaConta: PeopleAccount = new PeopleAccount(123456,'Matheus', 50)

console.log(novaConta)

const novaContaEstudate: StudentAccount = new StudentAccount('Matheus', 252552525
)

console.log(novaContaEstudate)
console.log(novaContaEstudate.withdrawStudent(100)) 

const companyAccount2: CompanyAccount = new CompanyAccount('Bradesco', 20)
console.log(companyAccount2.getLoan(7000))