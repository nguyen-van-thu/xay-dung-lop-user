"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email, role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    getInfo() {
        return this._name;
        return this._email;
        return this._role;
    }
    isAdmin(user) {
        if (this._role == 1) {
            console.log('la admin');
        }
        else {
            console.log('nguoi binh thuong');
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
}
exports.User = User;
