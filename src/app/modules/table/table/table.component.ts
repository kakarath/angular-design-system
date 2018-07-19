import { Component, Input, OnInit, Output, EventEmitter, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class AppTable {
    @Input() index;
    @Input() headers;
    @Input() dataRows;
    @Input() searchable;
    @Input() tableSummary;
    @Input() theme;
    @Input() tableTitle;
    @Input() buttonFocus;
    @Input() paginate;
    @Input() searchText ="";
    @Input() starRating;
    @Input() maxRows;
    @Output() onOpenModal = new EventEmitter<object>();
    headerLength;
    headerEvent;
    selected;
    p: number;
    
    ngOnInit() {
        this.headerLength = this.headers.length;

        this.headers.map(x => {
            (x.header.attr === "sorted") ? this.headerEvent = {name: x.header.attr, id: x.header.prop, asc: true} : false;
        });
    }

    passPage(e){
        this.p = e;
    }

    SearchText(value) {
        this.searchText = value;
    }
    
    passHeaderEvent(e) {
        if (e.header === "sort") {
            this.headerEvent = e
            this.selected = e.e.target.id
        }
    }
    
    openModal(e) {
        this.onOpenModal.emit(e);  
    }
}