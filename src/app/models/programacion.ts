export class Programacion {
    start: Date;
    title: String;
    id: number;
    email: string;

    constructor(start:Date, title:string, id:number, email:string) {
        this.start = start;
        this.title = title;
        this.id = id;
        this.email = email;
    }
}