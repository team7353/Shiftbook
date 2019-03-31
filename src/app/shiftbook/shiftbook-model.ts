import { Time } from '@angular/common';

export class Report{

    constructor(
        public date: string, 
        public time: string,
        public shift: string,
        public line: string,
        public fault: string,
        public solution: string,        
        public desc: string, 
        public brkDwnTm: number,
        public respons: string,
        public addPers1: string,
        public escPers: string,
        public AttPath: string){
    }
}