import { Time } from '@angular/common';

export class Report{

    constructor(
        public date: Date, 
        public time: Time,
        public shift: string,
        public fault: string,
        public solution: string,        
        public desc: string, 
        public brkDwnTm: number,
        public responsible: string,
        public addPers1: string,
        public escPers: string,
        public AttPath: string){
    }

}