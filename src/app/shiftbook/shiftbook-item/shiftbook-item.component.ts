import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Report } from '../shiftbook-model';

@Component({
    selector: 'app-shiftbook-item',
    templateUrl: './shiftbook-item.component.html',
    styles: [`div.border {
            border-bottom: 1px solid #333;
            border-right: 1px solid #333;
        }
    `]
        
    
})


export class ShiftbookItemComponent {

    @Input() report : Report;
    @Output() ReportSelected = new EventEmitter<string>()

    onSelect(feature) {
    this.ReportSelected.emit(feature)
    console.log("Change detail Report to: "+ feature)
}
}
