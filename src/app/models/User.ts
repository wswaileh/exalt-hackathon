
export class User {

    name: string;
    email: string;
    password: string;
    phone: string;
    id: string;
    city: string;
    bloodType: string;

    constructor(name: string, email: string, password: string, phone: string, id: string, city: string, bloodType: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.id = id;
        this.city = city;
        this.bloodType = bloodType;
    }
}