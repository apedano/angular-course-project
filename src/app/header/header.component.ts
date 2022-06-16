import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    @Output('selection') selectionEventEmitter: EventEmitter<string> = 
    new EventEmitter<string>();
    

    onSelect(sel: string) {
        this.selectionEventEmitter.emit(sel);    
    }

}