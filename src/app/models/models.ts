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
    job_id: Job;
    age: String;
}

export class NewEncouner {
    id: Number;
    date: String;
    colonist_id: Number;
    atype: String;
    action: String;
}
