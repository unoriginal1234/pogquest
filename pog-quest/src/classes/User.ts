export default class User {
    username: string;
    password: string;
    emails: string[];
    name: string;
    _id: string;

    constructor(username: string, password: string, emails: string[]) {
        this.username = username;
        this.password = password;
        this.emails = emails;
        this.name = "";
        this._id = "";
    }

    setId(id: string) {
        this._id = id;
    }

    getId() {
        return this._id;
    }

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getUsername() {
        return this.username;
    }

    getEmails() {
        return this.emails;
    }

    addEmail(email: string) {
        this.emails.push(email);
    }

    removeEmail(email: string) {
        this.emails = this.emails.filter(e => e !== email);
    }

    getPassword() {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
    }
}