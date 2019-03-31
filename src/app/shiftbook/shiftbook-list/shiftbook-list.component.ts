import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Report } from '../shiftbook-model';

@Component({
    selector: 'app-shiftbook-list',
    templateUrl: './shiftbook-list.component.html'
})


export class ShiftbookListComponent {

    @Output() reportWasSelected = new EventEmitter<Report>();

    reports: Report[] = [
        new Report('31/12/2019', '23:59', 'Night', '09301SO01', 'Fault description example', 'Solution description example', 'The ultimate Description', 20, 'An_D', '','', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/FuBK_testcard_vectorized.svg/220px-FuBK_testcard_vectorized.svg.png'),
        new Report('31/12/2019', '23:59', 'Night', 'Framing B301 ST010 FG21', 'Another fault', 'No solution', 'Escaleted to John', 20, 'An_D', 'Tiisetso','John', ''),
        new Report('31/12/2019', '23:59', 'Night', 'Frontend FW01 ST100 CV001', 'that was a big shit', 'English words', 'I run out of Ideas', 20, 'An_D', 'Ruan','Annik', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/FuBK_testcard_vectorized.svg/220px-FuBK_testcard_vectorized.svg.png'),
        new Report('31/12/2019', '23:59', 'Night', 'Centerfloor CF02 ST050 FX01 BG11.3', 'Trubble', 'Ik kan nie Afrikaans verstaan', 'just a better Description', 20, 'An_D', '','', ''),
        new Report('31/12/2019', '23:59', 'Night', 'Underbody underneath the Conveyor', 'This should be a example for a very very very very very very long text to see how it will fit and adjust in different scalings and I copy it to make it really long This should be a example for a very very very very very very long text to see how it will fit and adjust in different scalings i mean really long This should be a example for a very very very very very very long text to see how it will fit and adjust in different scalings', 'nope, i better not write what I think', 'the End', 20, 'An_D', '','', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/FuBK_testcard_vectorized.svg/220px-FuBK_testcard_vectorized.svg.png')
    ]

    onReportSelected(report: Report) {
    this.reportWasSelected.emit(report)
    }
}
