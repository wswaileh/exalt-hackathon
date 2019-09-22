export class User {

    name: string;
    email: string;
    password: string;
    phone: string;
    id: string;
    city: string;
    bloodType: string;
    constructor(name: string, email: string, phone: string, city: string, bloodType: string) {
        this.bloodType=bloodType;
        this.city=city;
        this.name=name;
        this.email=email;
        this.phone=phone;

    }
}