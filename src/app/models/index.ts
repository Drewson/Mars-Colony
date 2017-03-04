export interface Colonist {
    name: String;
    job: Job;
    id: Number;
    age: String;
}

export interface Job {
    name: String;
    id: Number;
    description: String;
}

export interface Encounter {
    id: Number;
    date: String;
    colonist_id: Number;
    atype: String;
    action: String;
}

export interface Alien {
    type: String;
    submitted_by: String;
    id: Number;
    description: String;
}

export class NewColonist {
    name: String;
    job_id: string;
    age: String;
    constructor(name: string, job_id: string, age: string){
        this.name = name;
        this.age = age;
        this.job_id = job_id;
    }
}

export class NewEncounter {
    date: String;
    colonist_id: Number;
    atype: String;
    action: String;
    constructor( date: string, colonist_id: Number, atype: string, action: String){
        this.date = date;
        this.colonist_id = colonist_id;
        this.atype = atype;
        this.action = action;
    }
}
