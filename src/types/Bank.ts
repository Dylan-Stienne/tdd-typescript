import Account from './Account'

export default class Bank {
    private name: string;
    private accounts: Array<Account>;

    constructor(name: string) {
        this.setName(name);
        this.accounts = []
    }

    public getName = () => {
        return this.name
    }

    public setName = (name: string) => {
        if (!name) throw new Error("Bank name can't be empty")
        this.name = name
    }

    public openAccount = (name: string, solde: number = 0) => {
        const account = new Account(name, solde)
        this.accounts.push(account)
        return account
    }

    public getAccounts = () => {
        return this.accounts
    }
}