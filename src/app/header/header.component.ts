import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})


export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>()
    onSelect(feature) {
        this.featureSelected.emit(feature)
        console.log("Change screen to: "+ feature)
    }
}
