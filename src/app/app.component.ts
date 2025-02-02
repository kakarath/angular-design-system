import {
  Component,
  OnInit
} from '@angular/core';

import modalData from '../assets/data/modalData.json';
import chartData from '../assets/data/chart-data.json';
import tableData from '../assets/data/table-data.json';
import tableHeaderData from '../assets/data/table-header-data.json';
import lineData from '../assets/data/line-data.json';
import dataSet from '../assets/data/publicReportingData.json';
import pieData from '../assets/data/pie-data.json';
import barData from '../assets/data/bar-data.json';
import cluster from '../assets/data/cluster-data.json';
import singleTableData from '../assets/data/single-table-data.json';
import dropDownData from '../assets/data/drop-down-data.json';
import { ModalService } from './services/modal.service';
import { ExampleModalComponent } from './components/example-modal/example-modal.component';
import { AppTableModalComponent } from './modules/table/table-modal/table-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
      ModalService
  ],
  entryComponents: [
      ExampleModalComponent
  ]
})

export class AppComponent implements OnInit {
    modalData;
    chartData;
    tableData;
    tableHeaderData;
    lineData;
    dataSet;
    pieData;
    barData;
    cluster;
    searchText;
    openAll;
    singleTableData;
    totalRows = 0;
    resetSearch: boolean;
    searchValue: string;
    dropDown = [
        {
            content: 'option1',
            value: 'op1'
        },
        {
            content: 'option2',
            value: 'op2'
        },
        {
            content: 'option3',
            value: 'op3'
        }
    ];

    constructor(private modalService: ModalService) {}

    buttonClick(e) {
        if (e.button) {
            console.log(e);
            this.modalService
            .appendComponentToBody(AppTableModalComponent, e.event.target.id, 'Modal Example', e.button.array, 'cancelButton1');
        } else {
            console.log('Button pressed.');
        }
    }

    ngOnInit() {
        this.modalData = modalData;
        this.chartData = chartData;
        this.tableData = tableData;
        this.tableHeaderData = tableHeaderData;
        this.lineData = lineData;
        this.dataSet = dataSet;
        this.pieData = pieData;
        this.cluster = cluster;
        this.barData = barData;
        this.singleTableData = singleTableData;
    }

    searchFunction(e) {
        if (e.target.value.trim() !== '') {
            this.openAll = true;
            this.searchText = e.target.value;
            this.totalRows = 0;
        } else {
            this.openAll = false;
            this.searchText = false;
            this.totalRows = 0;
        }
    }

    countTableRows(e) {
        this.totalRows += e;
    }

    announce(e) {
        console.log(e);
        this.searchValue = e;
    }

    clear() {
        this.resetSearch = true;
    }
}
