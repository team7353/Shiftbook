import { Component, Output } from '@angular/core';
import { Report } from './shiftbook-model';

@Component({
    selector: 'app-shiftbook',
    templateUrl: './shiftbook.component.html'
})


export class ShiftbookComponent {
    @Output() selectedReport: Report

}
