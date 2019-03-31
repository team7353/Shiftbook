import { Component, Input } from '@angular/core';
import { Report } from '../shiftbook-model';

@Component({
    selector: 'app-shiftbook-detail',
    templateUrl: './shiftbook-detail.component.html'
})


export class ShiftbookDetailComponent {
    @Input() report : Report;
}
