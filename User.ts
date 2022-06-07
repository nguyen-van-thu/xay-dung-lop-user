export class User {
    protected _name : string;
    protected _email : string;
    public _role : number;

    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
     getInfo(){
        return this._name;
        return this._email;
        return this._role;
    }
    isAdmin(user:User){
        if (this._role == 1){
            console.log('la admin');
        }else {
            console.log('nguoi binh thuong');
        }

    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get role(): number {
        return this._role;
    }

    set role(value: number) {
        this._role = value;
    }
}
