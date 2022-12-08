import Bank from '../types/Bank'

describe('Bank', () => {
    describe('Creation manager', () => {
        it('should create a bank with classique name', () => {
            const bank = new Bank('testing bank')
            expect(bank.getName()).toEqual('testing bank')
        })
        it('should create an bank with other classique name', () => {
            const bank = new Bank('testing bank name')
            expect(bank.getName()).toEqual('testing bank name')
        })
        it('should throw an error if we try to create bank with empty name', () => {
            expect(() => new Bank('')).toThrow("Bank name can't be empty")
        })
        it('should have empty list of accounts whene bank is created', () => {
            const bank = new Bank('testing')
            expect(bank.getAccounts()).toEqual([])
        })
    })
    describe('Name manager', () => {
        it('should change name whene is called', () => {
            const bank = new Bank('testing')
            bank.setName('testing bank');
            expect(bank.getName()).toEqual('testing bank')
        })
        it('should throw an error if we try to create bank with empty name', () => {
            const bank = new Bank('testing')
            expect(() => bank.setName('')).toThrow("Bank name can't be empty")
        })
    })
    describe('Accounts manager', () => {
        it('should opened account and link it to the bank accounts list', () => {
            const bank = new Bank('testing')
            const account = bank.openAccount('testing', 1000);
            expect(bank.getAccounts()).toEqual([account])
        })
        it('should opened many account and link them to the bank accounts list', () => {
            const bank = new Bank('testing')
            const account1 = bank.openAccount('testing 1', 500);
            const account2 = bank.openAccount('testing 2', 1000);
            expect(bank.getAccounts()).toEqual([account1, account2])
        })
    })
})