export default class User {
    username: string;
    password: string;
    emails: string[];
    constructor(username: string, password: string, emails: string[]) {
        this.username = username;
        this.password = password;
        this.emails = emails;
    }
}