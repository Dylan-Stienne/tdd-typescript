export default class Account {
    private name: string;
    private solde: number;
    private operations: Array<string>;

    constructor(name: string, solde: number = 0) {
        if (solde < 0) throw new Error("Account can't be create with negative solde")
        this.solde = solde;
        this.operations = [`[OPEN] Solde -> ${solde}`]
        this.setName(name);
    }

    public getName = () => {
        return this.name
    }

    public setName = (name: string) => {
        if (!name) throw new Error("Account name can't be empty")
        this.name = name
    }

    public getSolde = () => {
        return this.solde
    }

    public deposit = (value: number) => {
        if (value <= 0) throw new Error("Can't deposit 0 or negative value")
        this.solde += value
        this.operations.push(`[DEPOSIT][+${value}] Solde -> ${this.solde}`)
    }

    public withdraw = (value: number) => {
        if (value <= 0) throw new Error("Can't withdraw 0 or negative value")
        this.solde -= value
        this.operations.push(`[WITHDRAW][-${value}] Solde -> ${this.solde}`)
    }

    public getOperations = () => {
        return this.operations
    }
}