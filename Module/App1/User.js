
export function userAssist(){
    return "Hello i am from User";
}

export class Student{
    constructor(name,address,marks){
        this.name=name;
        this.address=address;
        this.marks=marks;
    }

    getData(){
        return this.name+","+this.address+","+this.marks
    }
}