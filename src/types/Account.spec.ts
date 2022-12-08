import Account from '../types/Account'

describe('Account', () => {
    describe('Creation manager', () => {
        it('should create an account with classique name', () => {
            const account = new Account('testing account')
            expect(account.getName()).toEqual('testing account')
        })
        it('should create an account with other classique name', () => {
            const account = new Account('testing bank account')
            expect(account.getName()).toEqual('testing bank account')
        })
        it('should throw an error if we try to create account with empty name', () => {
            expect(() => new Account('')).toThrow("Account name can't be empty")
        })
        it('should init solde account to 0 when account is created without initial solde', () => {
            const account = new Account('testing')
            expect(account.getSolde()).toEqual(0)
        })
        it('should init solde account to 500 when account is created with 500 initial solde', () => {
            const account = new Account('testing', 500)
            expect(account.getSolde()).toEqual(500)
        })
        it('should init solde account to 1000 when account is created with 1000 initial solde', () => {
            const account = new Account('testing', 1000)
            expect(account.getSolde()).toEqual(1000)
        })
        it('should throw an error if we try to create account with negative solde', () => {
            expect(() => new Account('testing', -500)).toThrow("Account can't be create with negative solde")
        })
    })
    describe('Solde manager', () => {
        it('should add value from solde whene is called', () => {
            const account = new Account('testing', 1000)
            account.deposit(500);
            expect(account.getSolde()).toEqual(1500)
        })
        it('should throw an error if we try to deposit 0 value', () => {
            const account = new Account('testing', 1000)
            expect(() => account.deposit(0)).toThrow("Can't deposit 0 or negative value")
        })
        it('should throw an error if we try to deposit negative value', () => {
            const account = new Account('testing', 1000)
            expect(() => account.deposit(-500)).toThrow("Can't deposit 0 or negative value")
        })
        it('should remove value from solde whene is called', () => {
            const account = new Account('testing', 1000)
            account.withdraw(500);
            expect(account.getSolde()).toEqual(500)
        })
        it('should throw an error if we try to withdraw 0 value', () => {
            const account = new Account('testing', 1000)
            expect(() => account.withdraw(0)).toThrow("Can't withdraw 0 or negative value")
        })
        it('should throw an error if we try to withdraw negative value', () => {
            const account = new Account('testing', 1000)
            expect(() => account.withdraw(-500)).toThrow("Can't withdraw 0 or negative value")
        })
    })
    describe('Name manager', () => {
        it('should change name whene is called', () => {
            const account = new Account('testing')
            account.setName('testing account');
            expect(account.getName()).toEqual('testing account')
        })
        it('should throw an error if we try to create account with empty name', () => {
            const account = new Account('testing')
            expect(() => account.setName('')).toThrow("Account name can't be empty")
        })
    })
    describe('Operations history manager', () => {
        it('should init the first operation in history to 0 if 0 is given', () => {
            const account = new Account('testing')
            expect(account.getOperations()).toEqual([
                '[OPEN] Solde -> 0'
            ])
        })
        it('should init the first operation in history to 1000 if 1000 is given', () => {
            const account = new Account('testing', 1000)
            expect(account.getOperations()).toEqual([
                '[OPEN] Solde -> 1000'
            ])
        })
        it('should add operation in history when deposit', () => {
            const account = new Account('testing', 1000)
            account.deposit(500)
            expect(account.getOperations()).toEqual([
                '[OPEN] Solde -> 1000',
                '[DEPOSIT][+500] Solde -> 1500'
            ])
        })
        it('should add operation in history when withdraw', () => {
            const account = new Account('testing', 1000)
            account.withdraw(500)
            expect(account.getOperations()).toEqual([
                '[OPEN] Solde -> 1000',
                '[WITHDRAW][-500] Solde -> 500'
            ])
        })
        it('should add operations in history when doing many operations', () => {
            const account = new Account('testing', 500)
            account.withdraw(200)
            account.withdraw(100)
            account.deposit(1250)
            account.withdraw(9.99)
            expect(account.getOperations()).toEqual([
                '[OPEN] Solde -> 500',
                '[WITHDRAW][-200] Solde -> 300',
                '[WITHDRAW][-100] Solde -> 200',
                '[DEPOSIT][+1250] Solde -> 1450',
                '[WITHDRAW][-9.99] Solde -> 1440.01'
            ])
        })
    })
})