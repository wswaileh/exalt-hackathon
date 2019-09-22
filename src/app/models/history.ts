export class History{
    date: string;
    hospital: string;
    numOfBloodUnits: string;

    constructor(date: string,hospital: string,numOfBloodUnits: string){
        this.date = date;
        this.numOfBloodUnits= numOfBloodUnits;
        this.hospital = hospital;
    }
}